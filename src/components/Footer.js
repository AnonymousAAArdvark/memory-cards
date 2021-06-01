import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/all";

const Footer =  () => {
  return (
    <FooterWrapper>
      <p>Copyright © 2021 AnonymousAAArdvark</p>
      <GithubLink href="https://github.com/anonymousaaardvark" target="_blank">
        <FaGithub />
      </GithubLink>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: .5rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.red};
`;

const GithubLink = styled.a`
  display: flex;
  padding-bottom: 0.3rem;
  margin-left: 0.7rem;
  color: ${({ theme }) => theme.colors.dark};
  font-size: 1.8rem;

  &:hover {
    color: ${({ theme }) => theme.colors.darkHover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.darkActive};
  }
`;

export default Footer;
