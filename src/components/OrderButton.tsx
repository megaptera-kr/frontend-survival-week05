import Menu from '../types/Menu';

import calcTotalPrice from '../utils/calcTotalPrice';

interface OrderButtonProps {
    cart: Menu[];
    handleClickOrder: () => Promise<void>;
}
export default function OrderButton({
  cart,
  handleClickOrder,
} : OrderButtonProps) {
  const totalPrice = calcTotalPrice(cart);

  return (
    <button type="button" onClick={handleClickOrder}>
      합계:
      {' '}
      {totalPrice.toLocaleString()}
      원 주문
    </button>
  );
}
