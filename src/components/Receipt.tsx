import { ReceiptType } from '../types/restaurants';

type ReceiptProps = {
  receipt: ReceiptType
}
function Receipt({ receipt }: ReceiptProps) {
  if (!Object.keys(receipt).length) return <div>[영수증 나오는 곳]</div>;

  return (
    <div style={{ width: '25rem', border: '1px solid black', textAlign: 'center' }}>
      <h2>영수증</h2>
      <div>
        <h3>주문번호</h3>
        <p>{receipt.id}</p>
      </div>
      {receipt.menu.map((order) => (
        <div key={order.id}>
          <h3>주문목록</h3>
          <p>{`${order.name}(${order.price.toLocaleString()})원`}</p>
        </div>
      ))}
      <p>{`총 가격: ${receipt.totalPrice.toLocaleString()}원`}</p>
    </div>
  );
}

export default Receipt;
