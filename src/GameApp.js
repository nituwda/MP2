import React, { Component } from "react";
import "./GameApp.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

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
      noDealClicked: false,
      higherClicked: false,
      lowerClicked: false,
      nextRoundClicked: false,
      text: false,
      status: " ",
      // totalScore: 0,
    };
  }

  // random number
  random = () => {
    return Math.floor(Math.random() * 13 + 1);
  };

  // start the game
  start = () => {
    const num1 = this.random();
    const num2 = this.random();
    this.setState({
      firstNum: Math.min(num1, num2),
      secondNum: Math.max(num1, num2),
    });
    this.state.round++;
    console.log("ROUND: " + this.state.round);
    console.log("points: " + this.state.score);
  };

  // restart the game
  restart = () => {
    window.location.reload();
  };

  // deal 5 11 7
  deal = () => {
    this.setState({ thirdNum: this.random(), text: "DEAL" }, () => {
      console.log("deal is clicked");
      this.setState({ dealClicked: true });
      // ipapasok yung validation ng kung yung third number ay nasa gitna ng first and second
      if (
        this.state.thirdNum > this.state.firstNum &&
        this.state.thirdNum < this.state.secondNum
      ) {
        console.log("plus points");
        this.setState({ status: "WIN" });
        this.state.score++;
      } else {
        console.log("minus points");
        this.setState({ status: "LOSE" });
        this.state.score--;
      }
    });
    // console.log("deal is clicked");
    // this.state.dealClicked = true;
    // // ipapasok yung validation ng kung yung third number ay nasa gitna ng first and second
    // if (
    //   this.state.thirdNum > this.state.firstNum &&
    //   this.state.thirdNum < this.state.secondNum
    // ) {
    //   console.log("plus points");
    //   this.state.score++;
    // } else {
    //   console.log("minus points");
    //   this.state.score--;
    // }
    // console.log(this.state.firstNum);
    // console.log(this.state.secondNum);
    // console.log(this.state.thirdNum);
  };

  // no deal
  noDeal = () => {
    this.setState({ text: "NO DEAL", status: "NO DEAL" });
    console.log("no deal is clicked");
    this.state.noDealClicked = true;
    this.state.score = this.state.score - 0.5;
  };

  // higher
  higher = () => {
    console.log("higher is clicked");
    this.setState({ thirdNum: this.random(), text: "HIGHER" }, () => {
      this.state.higherClicked = true;
      if (this.state.thirdNum > this.state.firstNum) {
        this.setState({ status: "WIN" });
        this.state.score++;
      } else {
        this.setState({ status: "LOSE" });
        this.state.score--;
      }
      console.log("points: " + this.state.score);
    });
  };

  // lower
  lower = () => {
    console.log("lower is clicked");
    this.setState({ thirdNum: this.random(), text: "LOWER" }, () => {
      this.state.lowerClicked = true;
      if (this.state.thirdNum < this.state.firstNum) {
        this.state.score++;
        this.setState({ status: "WIN" });
      } else {
        this.state.score--;
        this.setState({ status: "LOSE" });
      }
      console.log("points: " + this.state.score);
    });
  };

  // next round
  nextRound = () => {
    this.state.dealClicked = false;
    this.state.noDealClicked = false;
    this.state.nextRoundClicked = true;
    // this.state.round++;
    console.log("points: " + this.state.score);
    this.start();
  };

  render() {
    if (this.state.round === 0) {
      return (
        <div>
          <Button variant="primary" onClick={this.start}>
            Start
          </Button>
        </div>
      );
    } else if (this.state.round === 6) {
      return (
        <div>
          <p>Total score: {this.state.score} </p>
          <Button variant="primary" onClick={this.restart}>
            Start again?
          </Button>
        </div>
      );
    } else if (this.state.firstNum === this.state.secondNum) {
      return (
        <div>
          <p>Round: {this.state.round}</p>
          <p>First number: {this.state.firstNum}</p>
          <p>Second number: {this.state.secondNum}</p>
          {this.state.higherClicked || this.state.lowerClicked ? (
            <div>
              <p> Choice: {this.state.text} </p>
              <p> Third number: {this.state.thirdNum}</p>
              <p> Status: {this.state.status}</p>
              <Button variant="primary" onClick={this.nextRound}>
                NEXT ROUND
              </Button>
            </div>
          ) : (
            <div>
              <Button variant="primary" onClick={this.higher}>
                HIGHER
              </Button>
              <Button variant="primary" onClick={this.lower}>
                LOWER
              </Button>
            </div>
          )}
          {/* {this.state.lowerClicked && (
            <div>
              <p> Choice: {this.state.text} </p>
              <button onClick={this.nextRound}> NEXT ROUND </button>
            </div>
          )} */}
          {/* {this.state.lowerClicked && (
            <div>
              <p> Choice: {this.state.text} </p>
              <p> Third number: {this.state.thirdNum}</p>
              <p> Status: {this.state.status}</p>
              <button onClick={this.nextRound}> NEXT ROUND </button>
            </div>
          )} */}
        </div>
      );
    } else {
      return (
        <div>
          <p>Round: {this.state.round}</p>
          <p>First number: {this.state.firstNum}</p>
          <p>Second number: {this.state.secondNum}</p>
          {this.state.dealClicked || this.state.noDealClicked ? (
            <div>
              <p> Choice: {this.state.text} </p>
              <p> Third number: {this.state.thirdNum}</p>
              <p> Status: {this.state.status}</p>
              <Button variant="primary" onClick={this.nextRound}>
                NEXT ROUND
              </Button>
            </div>
          ) : (
            <div>
              <Button variant="primary" onClick={this.deal}>
                DEAL
              </Button>
              <Button variant="primary" onClick={this.noDeal}>
                NO DEAL
              </Button>
            </div>
          )}
          {/* {this.state.noDealClicked && (
            <div>
              <p> Choice: {this.state.text} </p>
            </div>
          )} */}
          {/* <button onClick={this.deal}> DEAL </button>
          <button onClick={this.noDeal}> NO DEAL </button> */}
        </div>
      );
    }
  }
}

export default GameApp;
