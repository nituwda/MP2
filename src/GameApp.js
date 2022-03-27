import React, { Component } from "react";
import './index.css';
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import casino from './assets/casino.jpg';

class GameApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      round: 0,
      firstNum: this.random(),
      secondNum: this.random(),
      thirdNum: this.random(),
      dealClicked: false,
      higherClicked: false,
      lowerClicked: false,
      nextRoundClicked: false,
      text: false,
    };
  }

  // random number
  random = () => {
    return Math.floor(Math.random() * 13 + 1);
  };

  // start the game
  start = () => {
    this.setState({
      firstNum: this.random(),
      secondNum: this.random(),
    });
    this.state.round++;
    console.log("ROUND: " + this.state.round);
  };

  // restart the game
  restart = () => {
    this.setState({ round: 0 });
  };

  // deal
  deal = () => {
    
    this.setState({ thirdNum: this.random(), text: "DEAL" });
    console.log("deal is clicked");
    this.state.dealClicked = true;
    
    // ipapasok yung validation ng kung yung third number ay nasa gitna ng first and second
    if (
      // (this.state.thirdNum > this.state.firstNum && this.state.thirdNum < this.state.secondNum ) ||
      // (this.state.thirdNum < this.state.secondNum && this.state.thirdNum > this.state.firstNum) ||
      // (this.state.thirdNum < this.state.firstNum && this.state.secondNum < this.state.thirdNum) ||
          (this.state.thirdNum < this.state.firstNum && this.state.secondNum < this.state.thirdNum) || 
          (this.state.thirdNum > this.state.firstNum && this.state.secondNum > this.state.thirdNum) || 
          (this.state.thirdNum < this.state.firstNum && this.state.secondNum < this.state.thirdNum)
      
    ) {
      console.log("plus points");
    } else {
      console.log("minus points");
    }
  };

  // no deal
  noDeal = () => {
    console.log("no deal is clicked");
  };

  // higher
  higher = () => {
    console.log("higher is clicked");
    this.setState({ thirdNum: this.random() });
    this.state.higherClicked = true;
    if (this.state.thirdNum > this.state.firstNum) {
      this.state.score++;
    } else {
      this.state.score--;
    }
    console.log(this.state.score);
  };

  // lower
  lower = () => {
    console.log("lower is clicked");
    this.setState({ thirdNum: this.random() });
    this.state.lowerClicked = true;
    if (this.state.thirdNum < this.state.firstNum) {
      this.state.score++;
    } else {
      this.state.score--;
    }
    console.log(this.state.score);
  };

  // next round
  nextRound = () => {
    this.state.dealClicked = false;
    this.state.nextRoundClicked = true;
    // this.state.round++;
    this.start();
  };

  render() {
    
    if (this.state.round === 0) {
      return (
        
        <div className="start-wrapper">
        <div style={{ 
          marginLeft: "auto", 
          marginRight: "auto"}}>
          <p style={{ 
            textAlign: "center", 
            fontSize: "40px", 
            paddingBottom: "2%", 
            paddingTop: "15px"}}> 
            IN BETWEEN GAME INSTRUCTIONS </p>
          <p style={{
            fontSize: "18px",
            marginTop: "-50px",
            marginBottom: "50px",
          }}> Made by <br/>
           Aldrin Mariel T. Delica <br/>
           Hans Nituda
           </p>
          
          <p style={{ 
            textAlign: "left", 
            fontSize: "20px", 
            marginLeft: "5%", 
            marginRight: "5%"}}> 

              1. The game shall have five rounds of plays. <br/>
              2. game shall randomly draw TWO numbers  (1, 2, 3….13) <br/>
              3. The program shall allow the user to choose to “Deal” or “No Deal” after the first two numbers are revealed. <br/>
              4. Show the third number only AFTER the user choose an option of “Deal” or “No Deal”
                (The two cards are NOT identical) 
              The player has the option to choose between DEAL or NO DEAL. <br/>
              5. If the user chose DEAL - the player WINS the game if the THIRD number is in-between the first two drawn numbers. Otherwise, the player LOSES. <br/> 
              6. WIN: Add one point to the total score.  <br/>
              7. LOSE: Deduct one point to the total score. <br/>
              8. When the user chooses NO DEAL, deduct half points to the total score.<br/><br/><br/>
              1. What if the two cards are identical? <br/> 
              2. If the two randomized numbers are identical, the player has the option to choose between HIGHER or LOWER. <br/>
              3. If the user chose HIGHER - the player  WINS the game if the THIRD number is higher than the first two identical drawn numbers. Otherwise, the player LOSES. <br/>
              4. If the user chose LOWER- the player WINS the game if the THIRD number is higher than the first two identical drawn cards. Otherwise, the player LOSES. <br/>
              5. If the third randomized number is the same as the first two numbers, it is considered as a loss. 
              
          </p>

          <Button style={{ 
            textAlign: "center", 
            width: "300px", 
            height: "100px", 
            marginBottom: "10%", 
            marginTop: "5%",
            fontSize: "40px"}}
           onClick={this.start}> Start </Button>
        </div>
        </div>
      );
    } else if (this.state.firstNum == this.state.secondNum) {
      return (
        <div className="start-wrapper">
          <div style={{ 
          marginLeft: "auto", 
          marginRight: "auto"}}>
          <p style={{ fontSize: "70px"}}>
              First number: {this.state.firstNum}</p> 
          <p style={{ fontSize: "70px" }}>Second number: {this.state.secondNum}</p>
          {this.state.higherClicked && (
            <p> Third number: {this.state.thirdNum}</p>
          )}
          {this.state.lowerClicked && (
            <p> Third number: {this.state.thirdNum}</p>
          )}
          <Button style={{
            margin: "10px",
            fontSize: "40px",
            
          }} variant="success" onClick={this.higher}> HIGHER </Button>
          <Button style={{
            margin: "10px",
            fontSize: "40px"
          }} variant="danger" onClick={this.lower}> LOWER </Button>
        </div>
        </div>
      );
    } else if (this.state.round === 6) {
      return (
        <div>
          <button onClick={this.restart}> Start again?</button>
        </div>
      );
    }
    return (
      <div >
        <div className="start-wrapper">
        <p style={{ 
          fontSize: "40px",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center", 
          justifyContent: "center"
          }}>Round: {this.state.round}</p>
        <p style={{ 
          fontSize: "40px",
          marginLeft: "5%",
          marginRight: "5%",
          textAlign: "center", 
          justifyContent: "center"}}>
          First number: {this.state.firstNum}</p>
        <p style={{ fontSize: "40px",
          marginLeft: "5%",
          marginRight: "5%",
          textAlign: "center", 
          justifyContent: "center"}}>
          Second number: {this.state.secondNum}</p>
        {this.state.dealClicked ? (
          <div>
            <p> Status: {this.state.text} </p>
            <p style={{ 
              fontSize: "40px",
              marginLeft: "5%",
              marginRight: "5%",
              textAlign: "center", 
              justifyContent: "center"}}>
              Third number: {this.state.thirdNum}</p>
          </div>
          
        ) : (
          <div></div>
        )}
        <div>
        <div style={{ display: "flex", justifyContent: "center", textAlign: "left"}}>
        <Button style={{ margin: "10px", fontSize: "40px", textAlign: "left" }} variant="success" onClick={this.deal}> DEAL </Button>
        <Button style={{ margin: "10px", fontSize: "40px", textAlign: "left" }} variant="danger" onClick={this.restart}> NO DEAL </Button>
        <Button style={{ margin: "10px", fontSize: "40px", textAlign: "left" }} variant="secondary" onClick={this.nextRound}> NEXT ROUND </Button>
        </div>
        </div>
        </div>
      </div>
        
    );
     
  }
  
}


export default GameApp;
