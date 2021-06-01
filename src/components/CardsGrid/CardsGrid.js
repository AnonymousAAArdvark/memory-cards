import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardsGrid = ({ heroes, handleCardClick }) => {
  const heroCards = heroes.map((hero) => (
    <Card key={hero.id} hero={hero} handleCardClick={handleCardClick} />
  ));

  return <CardsGridWrapper>{heroCards}</CardsGridWrapper>;
}

const CardsGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;

  @media (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default CardsGrid;