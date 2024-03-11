import _ from 'lodash';

import ReceiptType from '../types/ReceiptType';
import { moneyformat } from '../utils/common';
import MenuType from '../types/MenuType';
import MenuItem from './MenuItem';

type ReceiptProps = {
  receipt: ReceiptType;
};

export default function Receipt({ receipt }: ReceiptProps) {
  if (_.isEmpty(receipt)) {
    return (
      <section className='mx-3 py-4 flex item-center justify-center'>
        <p>[영수증 나오는 곳]</p>
      </section>
    );
  }

  const { id, totalPrice, menu } = receipt;

  return (
    <section className='mx-3 py-4 flex flex-col item-center justify-center border text-center whitespace-nowrap'>
      <h2 className='font-bold'>영수증</h2>
      <div>
        <h3 className='font-bold'>주문번호</h3>
        <p>{id}</p>
      </div>
      <div>
        <h3 className='font-bold'>주문목록</h3>
        <ul className='flex flex-col justify-center w-full'>
          {menu.map((menuItem: MenuType, index: number) => {
            const key = `receipt-${menuItem.id}-${index}`;
            return <MenuItem key={key} menuItem={menuItem} />;
          })}
        </ul>
      </div>
      <p className='font-bold'>총 가격: {moneyformat(totalPrice)}원</p>
    </section>
  );
}
