import Food from '../../types/Food';
import calculateTotalPrice from '../../utils/calculateTotalPrice';

type OrderButton = {
  selectedFoods: Food[];
  handleClickOrder: () => void;
}

function OrderButton(
  { selectedFoods, handleClickOrder }: OrderButton,
) {
  const totalPrice = calculateTotalPrice(selectedFoods);
  return (
    <button type="button" onClick={handleClickOrder}>
      합계:
      {' '}
      {totalPrice.toLocaleString()}
      원 주문
    </button>
  );
}

export default OrderButton;
