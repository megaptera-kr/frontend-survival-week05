import Menu from '../types/Menu';

const calcTotalPrice = (cart: Menu[]) => (
  cart.reduce((price, menu) => price + menu.price, 0)
);

export default calcTotalPrice;
