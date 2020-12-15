import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

const Banner = styled.div`
  height: 210px;
  width: 1060px;
  background-image: ${`url(/menu/banner.png)`} ;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const Menu = () => (
  <MenuStyled>
    <Banner />

    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger} />
    </SectionMenu>

    <SectionMenu>
      <h2>Закуски и напитки</h2>
      <ListItem itemList={dbMenu.other} />
    </SectionMenu>
  </MenuStyled>
);