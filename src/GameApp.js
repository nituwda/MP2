import React, { Component } from "react";

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
      (this.state.thirdNum > this.state.firstNum &&
        this.state.thirdNum < this.state.secondNum) ||
      (this.state.thirdNum < this.state.secondNum &&
        this.state.thirdNum > this.state.firstNum)
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
        <div>
          <button onClick={this.start}> Start </button>
        </div>
      );
    } else if (this.state.firstNum == this.state.secondNum) {
      return (
        <div>
          <p>First number: {this.state.firstNum}</p>
          <p>Second number: {this.state.secondNum}</p>
          {this.state.higherClicked && (
            <p> Third number: {this.state.thirdNum}</p>
          )}
          {this.state.lowerClicked && (
            <p> Third number: {this.state.thirdNum}</p>
          )}
          <button onClick={this.higher}> HIGHER </button>
          <button onClick={this.lower}> LOWER </button>
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
      <div>
        <p>Round: {this.state.round}</p>
        <p>First number: {this.state.firstNum}</p>
        <p>Second number: {this.state.secondNum}</p>
        {this.state.dealClicked ? (
          <div>
            <p> Status: {this.state.text} </p>
            <p> Third number: {this.state.thirdNum}</p>
          </div>
        ) : (
          <div></div>
        )}
        <button onClick={this.deal}> DEAL </button>
        <button onClick={this.restart}> NO DEAL </button>
        <button onClick={this.nextRound}> NEXT ROUND </button>
      </div>
    );
  }
}

export default GameApp;
