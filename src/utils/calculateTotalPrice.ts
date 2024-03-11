import Food from '../types/Food';

function calculateTotalPrice(menu: Food[]) {
  return menu.reduce((acc, cur) => acc + cur.price, 0);
}

export default calculateTotalPrice;
