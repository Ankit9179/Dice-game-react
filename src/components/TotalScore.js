import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <TotalScorecontainer>
      <div className="total-score">
        <h1>{score}</h1>
        <p>Total score</p>
      </div>
    </TotalScorecontainer>
  );
};

export default TotalScore;

const TotalScorecontainer = styled.div`
  h1 {
    font-weight: bold;
    margin-left: 60px;
    font-size: 50px;
    margin-top: -50px;
  }
  p {
    margin-left: 20px;
    font-weight: bold;
    font-size: 20px;
    margin-top: -30px;
  }
  @media (max-width: 940px) {
    h1 {
      margin-left: 25%;
    }
    p {
      margin-left: 30%;
    }
  }
`;
