import { useState } from 'react';

const getTopping = toppings => toppings.map(item => ({
  name: item,
  checked: false
}));

export function useTopping(openItem) {

  const readyTopping = openItem.toppings ?
    getTopping(openItem.toppings) :
    [];// условие если нет топпингов
  const [toppings, setTopping] = useState(readyTopping);

  const checkToppings = index => {
    setTopping(toppings.map((item, i) => {
      if (i === index) {
        item.checked = !item.checked;
      }
      return item;
    }));
  };
  return { toppings, checkToppings };
}