import Receipt from '../types/Receipt';
import MenuItems from './MenuItems';

type ReceiptPrinterProps = {
  receipt: Receipt;
}

export default function ReceiptPrinter({ receipt }: ReceiptPrinterProps) {
  if (!receipt.id) {
    return <p>[영수증 나오는 곳]</p>;
  }

  const { id, menu, totalPrice } = receipt;

  return (
    <>
      <h2>영수증</h2>
      <h3>주문번호</h3>
      <p>{id}</p>
      <h3>주문목록</h3>
      <MenuItems menu={menu} buttonType="" />
      <p>
        총 가격:
        {' '}
        {totalPrice.toLocaleString()}
        원
      </p>
    </>
  );
}
