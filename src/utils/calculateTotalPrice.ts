import Food from '../types/Food';

export default function calculateTotalPrice(foods: Food[]) {
  return foods.reduce((acc, food) => acc + food.price, 0);
}
