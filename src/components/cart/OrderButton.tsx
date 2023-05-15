type Props = {
  totalPrice: number;
  handleOrder: () => Promise<void>
}

export default function OrderButton({
  totalPrice,
  handleOrder,
}:Props) {
  return (
    <button
      className="bg-green-400 rounded py-2 mt-2"
      type="button"
      data-testid="orderSubmit"
      onClick={totalPrice <= 0 ? undefined : handleOrder}
    >
      합계:
      {' '}
      {totalPrice.toLocaleString()}
      원 주문
    </button>
  );
}
