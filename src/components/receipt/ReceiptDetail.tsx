import Food from '../../types/food';
import Receipt from '../../types/receipt';

type ReceiptDetailProps = {
  receipt: Receipt
}

export default function ReceiptDetail({ receipt }: ReceiptDetailProps) {
  return (
    <div>
      <h3>영수증</h3>
      <p>
        {`주문번호: ${receipt.id}`}
      </p>
      <ul>
        {receipt.menu.map((food: Food, index: number) => (
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={`${food.id}-${index}`}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              paddingBottom: '10px',
            }}
          >
            <p>
              {`${food.name}(${food.price.toLocaleString('ko-kr')}원)`}
            </p>
          </li>
        ))}
      </ul>
      <p />
      <p>
        {`총 가격: ${receipt.totalPrice.toLocaleString('ko-kr')}원`}
      </p>
    </div>
  );
}
