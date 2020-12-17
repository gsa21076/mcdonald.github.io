import React from 'react';
import styled from 'styled-components';
import { BtnOrder } from './BtnOrder';

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
`;

const ModalOrder = styled.section`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  height: calc(100% - 210px);
  padding: 10px;
`;


const ModalHeader = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: 'Pacifico', cursive;
  display: flex;
  justify-content: space-between;
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
          <ModalHeader>
            <div>{openItem.name}</div>
            <div>{openItem.price.toLocaleString('ru-RU',
              { style: 'currency', currency: 'RUB' })}</div>
          </ModalHeader>
          <BtnOrder>Добавить</BtnOrder>

        </ModalOrder>
      </Modal>
    </Overlay>
  )
}