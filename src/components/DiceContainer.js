import React from "react";
import styled from "styled-components";

const DiceContainer = ({ currentDice, diceRoll }) => {
  return (
    <DiceContainerDiv>
      <div className="dice" onClick={diceRoll}>
        <img src={`/images/dices/Alea_${currentDice}.png`} alt="dive  num" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainerDiv>
  );
};

export default DiceContainer;

const DiceContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 15px;
    font-weight: 600;
  }
  img {
    width: 60px;
    margin-top: -50px;
  }
`;
