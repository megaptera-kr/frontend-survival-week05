import _ from 'lodash';

import Receipt from '../../types/Receipt';
import MenuItem from '../restaurants/MenuItem';

type ReceiptPrinter = {
  receipt: Receipt;
}

export default function ReceiptPrinter({ receipt }: ReceiptPrinter) {
  if (_.isEmpty(receipt)) {
    return <p>[영수증 나오는 곳]</p>;
  }

  const { id, menu, totalPrice } = receipt;

  return (
    <div>
      <h2>영수증</h2>
      <h3>주문번호</h3>
      <p>{id}</p>
      <h3>주문목록</h3>
      {menu.map((food, index) => {
        const key = `${food.id}-${index}`;

        return (
          <MenuItem
            key={key}
            food={food}
          />
        );
      })}
      <p>
        총 가격:
        {' '}
        {`${totalPrice.toLocaleString()}원`}
      </p>
    </div>
  );
}
