interface OrderButtonFieldProps {
  totalPrice: number;
}

export default function OrderButtonField({
  totalPrice,
}: OrderButtonFieldProps) {
  return (
    <button
      type="button"
    >
      합계:
      {' '}
      {(totalPrice).toLocaleString('ko-kr')}
      원 주문
    </button>
  );
}
