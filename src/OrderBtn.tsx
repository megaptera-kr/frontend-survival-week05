type OrderBtnProps = {
    totalPrice: number;
    handleOrder: ()=> void
}

export default function OrderBtn({ totalPrice, handleOrder }: OrderBtnProps) {
  return (
    <button type="button" onClick={handleOrder}>
      합계:
      {' '}
      {totalPrice.toLocaleString()}
      원 주문
    </button>
  );
}
