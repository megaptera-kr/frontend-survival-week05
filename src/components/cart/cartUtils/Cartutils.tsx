interface CartUtilsProps {
  totalPrice: number;
  handleClearCart: () => void;
  handleOrder: () => void;
}

export default function CartUtils({ totalPrice, handleClearCart, handleOrder }: CartUtilsProps) {
  return (
    <div>
      <button type="button" onClick={handleClearCart}>비우기</button>
      <button type="button" aria-label="주문하기" onClick={handleOrder}>{`합계: ${totalPrice}원 주문`}</button>
    </div>
  );
}
