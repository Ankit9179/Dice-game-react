import React from "react";
import styled from "styled-components";

const NumberSelector = ({ selectNumVal, setSelectNumVal }) => {
  const diceNum = [1, 2, 3, 4, 5, 6];

  return (
    <NumSelectrContainer>
      <div className="flex">
        {diceNum.map((value, index) => (
          <Box
            isSelected={value === selectNumVal}
            key={index}
            onClick={() => setSelectNumVal(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumSelectrContainer>
  );
};

export default NumberSelector;

const NumSelectrContainer = styled.div`
  .flex {
    display: flex;
    gap: 5px;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    margin-left: 6rem;
  }
`;

const Box = styled.div`
  height: 42px;
  width: 42px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 27px;
  font-weight: 700;
  margin-top: -35px;
  margin-right: 4px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};

  @media (max-width: 940px) {
  }
`;
