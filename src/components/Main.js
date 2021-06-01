import React from "react";
import styled from "styled-components";
import CardsGrid from "./CardsGrid";
import Scoreboard from "./Scoreboard/Scoreboard";

const Main = ({ heroes, currentScore, bestScore, handleCardClick }) => {
  return (
    <MainWrapper>
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <CardsGrid heroes={heroes} handleCardClick={handleCardClick} />
    </MainWrapper>
  );
};

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 4rem;
  margin-bottom: 3.5rem;
`;

export default Main;