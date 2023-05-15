import Food from '../../types/Food';

import calculateTotalPrice from '../../utils/calculateTotalPrice';

type OrderButtonProps = {
    foods: Food[];
    onClickOrder: () => void;
}

export default function OrderButton({ foods, onClickOrder }: OrderButtonProps) {
  const totalPrice = calculateTotalPrice(foods);

  return (
    <button
      type="button"
      onClick={onClickOrder}
    >
      합계:
      {' '}
      {totalPrice.toLocaleString()}
      원 주문
    </button>
  );
}
