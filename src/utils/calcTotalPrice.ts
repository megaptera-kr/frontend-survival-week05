import Food from '../type/Food';

type calcTotalPriceProps ={
  cartFood : Food[]
}

export default function calcTotalPrice({ cartFood }: calcTotalPriceProps) {
  return cartFood.reduce((acc, cur) => (acc + cur.price), 0);
}
