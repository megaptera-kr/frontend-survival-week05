import Receipt from '../types/Receipt';

const menuItemKey = (name:string, index:number) => `${index}-${name}`;

interface ReceiptPrinterProps{
  receipt: Receipt | null;
}

export default function ReceiptPrinter({ receipt } : ReceiptPrinterProps) {
  if (!receipt) {
    return (
      <p>[영수증 나오는 곳]</p>
    );
  }

  return (
    <div
      style={{
        border: '1px solid #000',
        textAlign: 'center',
      }}
    >
      <h2>영수증</h2>
      <h3>주문번호</h3>
      <p>{receipt.id}</p>
      <h3>주문목록</h3>
      <ul>
        {receipt.menu.map((item, index) => (
          <li key={menuItemKey(item.name, index)}>
            {item.name}
            (
            {item.price.toLocaleString()}
            원)
          </li>
        ))}
      </ul>
      <p>
        총 가격:
        {' '}
        {receipt.totalPrice.toLocaleString()}
        원
      </p>
    </div>
  );
}
