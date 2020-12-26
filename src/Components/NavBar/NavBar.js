import React from 'react';
import styled from 'styled-components';
import logoImg from '../../image/logoImg.svg';
import userImg from '../../image/userImg.svg';


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
const UserButton = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const LogOut = styled.span`
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  margin-right: 10px;

`;

const Figure = styled.div`
  margin: 0 20px;
`;




export const NavBar = ({ authentification, logIn, logOut }) => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt='logo' />
      <H1>MrDonald</H1>
    </Logo>
    {authentification ?
      <UserButton>
        <Figure>
          <img src={userImg} alt={authentification.displayName} />
          <figcaption>{authentification.displayName}</figcaption>
        </Figure>
        <LogOut tytle="Выйти" onClick={logOut}>X</LogOut>
      </UserButton> :
      <LoginButton onClick={logIn}>
        <img src={userImg} alt='войти' />
        <p>Войти</p>
      </LoginButton>}
  </NavBarStyled>
)