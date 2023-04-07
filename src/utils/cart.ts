import { Food } from '../types/food';

export const calcTotalPrice = (
  cartItems: Food[],
) => cartItems.reduce((acc, item) => acc + item.price, 0);

export const alreadyHasItem = (cart: Food[], food: Food): boolean => !!cart.find(
  (item) => item.id === food.id,
);

export default calcTotalPrice;
