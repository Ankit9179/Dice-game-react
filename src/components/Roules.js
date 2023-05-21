import React from "react";
import styled from "styled-components";

const Roules = () => {
  return (
    <Rousescontainer>
      <h1>How to play dice game</h1>
      <div>
        <p>1.Select a number</p>
        <p>2.Click on dice image</p>
        <p>
          3.After click on dice image if selected no,dice no and total score are
          same than you will be win
        </p>
        <p>4.If these numbers are not same than 2 point will be dedcted </p>
      </div>
    </Rousescontainer>
  );
};

export default Roules;

const Rousescontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 4px;
  background-color: RGB(182 185 187);
  margin-top: 9px;
  border-radius: 1rem;
`;
