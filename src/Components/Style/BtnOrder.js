import styled from 'styled-components';

export const BtnOrder = styled.button`
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 65px;
  font-size: inherit;
  font-family: inherit;
  border-color: transparent;
  background-color: #299b01;
  color: #fff;
  cursor: pointer;
  transition-property: background-color, color, border-color;
  transition-duration: 0.3s;
  &:hover {
    background-color: #fff;
    color: #299b01;
    border-color: #299b01;
  }
  &:disabled {
    color: #1f1f1f;
    background-color: #ccc;
    border-color: #aaa;
  }

`;