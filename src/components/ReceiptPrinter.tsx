import Receipt from '../type/Receipt';
import MenuFood from './MenuFood';

type ReceiptPrinterProps = {
  orderReceipt : Receipt
}

export default function ReceiptPrinter({ orderReceipt }: ReceiptPrinterProps) {
  return (
    <div>
      <h2>영수증</h2>
      <div>
        <h4>주문번호</h4>
        <h4>{orderReceipt.id}</h4>
      </div>
      <div>
        <ul>
          {
            (orderReceipt.menu).map((menu) => (
              <MenuFood key={menu.id} menu={menu} />
            ))
          }
        </ul>
      </div>
      <div>
        <p>
          총 가격:
          {orderReceipt.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </p>
      </div>
    </div>
  );
}
