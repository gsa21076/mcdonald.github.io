import React from 'react';
import styled from 'styled-components';
import logoImg from 'd:/projectReact/mrdonald/src/image/logoImg.svg';
import userImg from 'd:/projectReact/mrdonald/src/image/userImg.svg';


const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299B01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const LoginButton = styled.button`
  background-color: transparent;
  border-color: transparent;
  font-size: 16px;
  color: white;
`;


export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt='logo' />
      <H1>MrDonald</H1>
    </Logo>
    <LoginButton>
      <img src={userImg} alt='войти' />
      <p>Войти</p>
    </LoginButton>
  </NavBarStyled>
)