import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Title>OPM S-CLASS MEMORY</Title>
      </HeaderWrapper>
      <Line>
        <Logo src={logo} alt="logo"/>
      </Line>
    </>
  )
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.yellow};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.red};
  font-size: 5vw;
  line-height: 1.5;
  font-family: "Lato", sans-serif;
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.red};
`;

const Logo = styled.img`
  max-width: 80px;    
`;

export default Header;