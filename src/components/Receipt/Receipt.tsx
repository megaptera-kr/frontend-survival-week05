import { useTimeout } from 'usehooks-ts';
import { ReceiptProps } from '../../interfaces/RestaurantList.interface';

function Receipt({ receipt, onInitReceipt }: ReceiptProps) {
  useTimeout(() => {
    onInitReceipt();
  }, 5000);
  return (

    <div className="receiptWrap">
      <h2>영수증 나오는 곳</h2>
      <h3>
        <span>주문번호</span>
        {receipt.id}
      </h3>
      <ul>
        {receipt.menu.map((x) => (
          <li key={`receipt_menu_${x.id}`}>
            <span>{x.name}</span>
          </li>
        ))}
      </ul>
      <p>
        총 가격:
        {' '}
        {receipt.totalPrice}
        원
      </p>
    </div>
  );
}

export default Receipt;
