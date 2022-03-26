import React, { Component } from "react";
import './index.css';
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

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
    this.setState({ thirdNum: this.random(), text: "Deal" });
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
        
        <div style={{ marginLeft: "auto", marginRight: "auto"}}>
          <p style={{ textAlign: "center"}}> Let's play In Between </p>
          <Button style={{ textAlign: "center", width: "300px", height: "100px"}}
           onClick={this.start}> Start </Button>
        </div>
      );
    } else if (this.state.firstNum == this.state.secondNum) {
      return (
        <div>
          <p className="font-styles">First number: {this.state.firstNum}</p>
          <p>Second number: {this.state.secondNum}</p>
          {this.state.higherClicked && (
            <p> Third number: {this.state.thirdNum}</p>
          )}
          {this.state.lowerClicked && (
            <p> Third number: {this.state.thirdNum}</p>
          )}
          <Button varaint="success"onClick={this.higher}> HIGHER </Button>
          <Button onClick={this.lower}> LOWER </Button>
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
        <Form>
        <p style={{ fontSize: "24px", display: "flex", justifyContent: "center"}}>Round: {this.state.round}</p>
        <p style={{ fontSize: "24px", display: "flex", justifyContent: "center"}}>First number: {this.state.firstNum}</p>
        <p style={{ fontSize: "24px", display: "flex", justifyContent: "center"}}>Second number: {this.state.secondNum}</p>
        {this.state.dealClicked ? (
          <div>
            <p> Status: {this.state.text} </p>
            <p> Third number: {this.state.thirdNum}</p>
          </div>
        ) : (
          <div></div>
        )}
        <div style={{ display: "flex", justifyContent: "center"}}>
        <Button style={{ margin: "10px" }} variant="success" onClick={this.deal}> DEAL </Button>
        <Button style={{ margin: "10px" }} variant="danger" onClick={this.restart}> NO DEAL </Button>
        <Button style={{ margin: "10px" }} variant="secondary" onClick={this.nextRound}> NEXT ROUND </Button>
        </div>
        </Form>
      </div>
        
    );
    
  }
}

export default GameApp;
