import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`// затемнение для модального окна
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const Modal = styled.div`// моальное окно
  background-color: #FFF;
  width: 550px;
  height: 550px;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

const ModalOrder = styled.div`
  height: 25%;
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
`;


const H1 = styled.h1`
  font-size: 30px;
`;

const Order = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height:25%;

`;

const BtnOrder = styled.button`
  width: 250px;
  height: 65px;
  border: none;
  background-color: #299b01;
`;

const P = styled.p`
  font-size: 21px;
  color: #fff;
`;


export const ModalItem = ({ openItem, setOpenItem }) => {

  const closeModal = (event) => {
    if (event.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  if (!openItem) return null;

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <ModalOrder>
          <H1>{openItem.name}</H1>
          <H1>{openItem.price.toLocaleString('ru-RU',
            { style: 'currency', currency: 'RUB' })}
          </H1>
        </ModalOrder>
        <Order>
          <BtnOrder>
            <P>Добавить</P>
          </BtnOrder>
        </Order>
      </Modal>
    </Overlay>
  )
}