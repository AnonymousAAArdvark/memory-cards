import React from "react";
import styled from "styled-components";

const Card = ({ hero, handleCardClick }) => {
  return (
    <CardWrapper onClick={handleCardClick}>
      <Image src={hero.image} alt={hero.name} />
      <NameWrapper>
        <Name>{hero.name}</Name>
      </NameWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  min-height: 210px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.light};
  box-shadow: rgba(0, 0, 0, .35) 0 5px 15px;
  transition: transform .3s;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  padding: .5rem .5rem 0 .5rem;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const NameWrapper = styled.div`
  margin: 0 .5rem .5rem .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.red};
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;

const Name = styled.p`
  padding: .5rem;
  line-height: 1.2;
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.colors.light};
`;

export default Card;