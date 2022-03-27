import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import GameApp from "./GameApp";
import { Tabs, Tab } from "react-bootstrap";

export default function Page() {
  return (
    <div>
      <Tabs transition={false} id="noanim-tab-example" className="mb-3">
        <Tab eventKey="game" title="Game">
          <GameApp />
        </Tab>
        <Tab eventKey="profile" title="Instructions">
          <p>
            The game shall have five rounds of plays. The game shall randomly
            draw TWO numbers (1, 2, 3….13) The program shall allow the user
            choose to “Deal” or “No Deal” Show the third number only AFTER the
            user choose an option of “Deal” or “No Deal” (The two cards are NOT
            identical) The player has the option to choose between DEAL or NO
            DEAL. If the user chose DEAL - the player WINS the game if the THIRD
            number is in-between the first two drawn numbers. Otherwise, the
            player LOSES. WIN: Add one point to the total score. LOSE: Deduct
            one point to the total score. When the user chooses NO DEAL, deduct
            half points to the total score. (The two cards are identical) If the
            two randomized numbers are identical, the player has the option to
            choose between HIGHER or LOWER. If the user chose HIGHER - the
            player WINS the game if the THIRD number is higher than the first
            two identical drawn numbers. Otherwise, the player LOSES. If the
            user chose LOWER- the player WINS the game if the THIRD number is
            higher than the first two identical drawn cards. Otherwise, the
            player LOSES. If the third randomized number is the same as the
            first two numbers, it is considered as a loss. WIN: Add one point to
            the total score. LOSE: Deduct one point to the total score. When the
            user chooses NO DEAL, deduct half points to the total score.
          </p>
        </Tab>
      </Tabs>
    </div>
  );
}
ReactDOM.render(<Page />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
