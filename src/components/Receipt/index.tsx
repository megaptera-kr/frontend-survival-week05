import ReceiptType from '../../types/Receipt';
import { convertKRW } from '../../utils';

type ReceiptProps = {
  receipt:ReceiptType
  showReceiptState:boolean
}

function Receipt({ receipt, showReceiptState }:ReceiptProps) {
  return (
    <div style={{ textAlign: 'center' }}>
      {showReceiptState ? (
        <>
          <h3>주문번호</h3>
          <p>{receipt.id}</p>
          <h3>주문목록</h3>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            {
              receipt.menu.map((menuItem) => (
                <li key={menuItem.id} style={{ marginBlock: '1rem' }}>
                  <span>
                    {menuItem.name}
                    {' '}
                    (
                    {convertKRW(menuItem.price)}
                    )
                  </span>
                </li>
              ))
            }
          </ul>
          총 가격:
          {' '}
          {convertKRW(receipt.totalPrice)}
        </>
      ) : <p>[영수증 나오는 곳]</p>}

    </div>
  );
}

export default Receipt;
