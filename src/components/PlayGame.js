import React from "react";
import "../styles/playGame.css";

const PlayGame = ({ startGame }) => {
  return (
    <>
      <div className="container">
        <div className="paly-dice-main">
          <div className="play-dice-left">
            <img src="../images/dice.jpg" alt="dice-img" />
          </div>
          <div className="play-dice-right">
            <h1 className="h1-dice">dice game </h1>
            <div className="btn" onClick={startGame}>
              play now
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayGame;
