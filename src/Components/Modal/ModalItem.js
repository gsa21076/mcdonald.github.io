import React from 'react';
import styled from 'styled-components';
import { BtnOrder } from '../Style/BtnOrder';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { Choices } from './Choiсes';
import { useTopping } from '../Hooks/useTopping';
import { useChoices } from '../Hooks/useChoices';

export const Overlay = styled.div`// затемнение для модального окна
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

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;



export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

  const counter = useCount(openItem.count);
  const toppings = useTopping(openItem);
  const choices = useChoices(openItem);
  const isEdit = openItem.index > -1;

  const closeModal = (event) => {
    if (event.target.id === 'overlay') {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };

  const editOrder = () => {
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    setOpenItem(null);
  }

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);

  };

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <ModalOrder>
          <ModalHeader>
            <div>{openItem.name}</div>
            <div>{formatCurrency(openItem.price)}</div>
          </ModalHeader>
          <CountItem {...counter} />
          {openItem.toppings && <Toppings {...toppings} />}
          {openItem.choices && <Choices {...choices} openItem={openItem} />}
          <TotalPriceItem>
            <span>Цена</span>
            <span>{formatCurrency(totalPriceItems(order))}</span>
          </TotalPriceItem>
          <BtnOrder
            onClick={isEdit ? editOrder : addToOrder}
            disabled={order.choices && !order.choice}
          >{isEdit ? 'Редактировать' : 'Добавить'}</BtnOrder>

        </ModalOrder>
      </Modal>
    </Overlay>
  )
}