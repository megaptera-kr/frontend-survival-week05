import { Receipt } from '../types';

type Props = {
  receipt : Receipt
}
function ReceiptPrinter({ receipt } : Props) {
  if (!receipt.id) return <p>[영수증 나오는 곳]</p>;
  return (
    <div style={{ border: '1px solid black', textAlign: 'center' }}>
      <h2>영수증</h2>
      <div>
        <h3>주문 번호</h3>
        <p>{receipt.id}</p>
      </div>
      <div>
        <h3>주문 목록</h3>
        <ul>
          {receipt.menu.map((el, index) => {
            const key = el.name + index;
            return (
              <li key={key}>
                {el.name}
                (
                {el.price}
                원)
              </li>
            );
          })}
        </ul>
        <p>
          총 가격 :
          {receipt.totalPrice.toLocaleString()}
          원
        </p>
      </div>

    </div>
  );
}

export default ReceiptPrinter;
