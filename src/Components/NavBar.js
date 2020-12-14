import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logoImg.svg';
import userImg from '../image/userImg.svg';


const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100vw;
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

const Login = styled.button`
  background: #299B01;
  border: none;
  color: white;
  padding-right:30px;
`;

const ImgUser = styled.img`
`;

const P = styled.p`
  font-size: 12px;
`;


export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt='logo' />
      <H1>MrDonald</H1>
    </Logo>
    <Login>
      <ImgUser src={userImg} alt='user' />
      <P>Войти</P>
    </Login>
  </NavBarStyled>
)