import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import DiceContainer from "./DiceContainer";
import Roules from "./Roules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectNumVal, setSelectNumVal] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumer = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const diceRoll = () => {
    if (!selectNumVal) {
      alert("please select a number");
      return;
    }
    const diceNumVal = generateRandomNumer(1, 7);
    setCurrentDice((prev) => diceNumVal);

    if (diceNumVal === selectNumVal) {
      setScore((prev) => prev + diceNumVal);
    } else {
      setScore((prev) => prev - diceNumVal);
    }
    setSelectNumVal("");
  };

  return (
    <>
      <Main>
        <TopeSection>
          <TotalScore score={score} />
          <NumberSelector
            selectNumVal={selectNumVal}
            setSelectNumVal={setSelectNumVal}
          />
        </TopeSection>
        <DiceContainer currentDice={currentDice} diceRoll={diceRoll} />
        <div className="buttons">
          <button
            className="reset"
            onClick={() => {
              setScore(0);
              setCurrentDice(1);
            }}
          >
            Reset
          </button>
          <button
            className="rules"
            onClick={() => setShowRules((prev) => !prev)}
          >
            {showRules ? "Hide" : "show"}Rules
          </button>
        </div>
        {showRules && <Roules />}
      </Main>
    </>
  );
};

export default GamePlay;

const Main = styled.div`
  .buttons {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 3px;
    gap: 7px;
  }
  .reset {
    cursor: pointer;
    font-size: 20px;
    padding: 3px 20px;
    background-color: black;
    color: white;
    border-radius: 1rem;
  }
  .rules {
    cursor: pointer;
    font-size: 20px;
    padding: 3px 20px;
    background-color: RGB(199 201 202);
    color: black;
    border-radius: 1rem;
  }
`;

const TopeSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 60px;

  @media (max-width: 940px) {
  }
`;
