import MenuItem from './MenuItem';

import Receipt from '../types/Receipt';

type ReceiptPrintProps = {
  receipt: Receipt;
};

export default function ReceiptPrint({ receipt }: ReceiptPrintProps) {
  if (!receipt.id) {
    return <p>영수증이 나오는 곳 </p>;
  }

  const { id, menu, totalPrice } = receipt;
  return (
    <div>
      <h2>영수증</h2>
      <h3>주문번호</h3>
      <p>{id}</p>
      <div>
        <p>주문목록</p>
        <ul>
          {menu.map((food, index) => {
            const key = `${food.id}_${index}`;
            return <MenuItem key={key} food={food} />;
          })}
        </ul>
      </div>
      <div>
        <p>{`총 가격: ${totalPrice.toLocaleString()}원`}</p>
      </div>
    </div>
  );
}
