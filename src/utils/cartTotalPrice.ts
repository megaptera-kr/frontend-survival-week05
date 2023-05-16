import Food from '../types/food';

export default function cartTotalPrice(menu: Food[]) {
  let price = 0;
  if (!menu.length) {
    return price;
  }

  menu.forEach((food: Food) => {
    price += food.price;
  });

  return price;
}
