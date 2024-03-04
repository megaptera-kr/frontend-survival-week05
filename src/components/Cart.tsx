import useSelectedMenu from '../hooks/useSelectedMenu';
import MenuItem from './MenuItem';

import { calculateTotalMenuPrice, moneyformat } from '../utils/common';

import MenuType from '../types/MenuType';

export default function Cart() {
  const { selectedMenuItems, handleRemoveMenu, handleRemoveAllMenu } =
    useSelectedMenu();

  const totalPrice: number = calculateTotalMenuPrice(selectedMenuItems);
  const formattedPrice: string = moneyformat(totalPrice);

  return (
    <section className='w-full bg-white'>
      <div className='bg-slate-700'>
        <h2 className='ml-3 py-4 text-xl font-bold text-white'>점심 바구니</h2>
      </div>

      <ul className='flex flex-col bg-amber-50 rounded-lg p-3'>
        {selectedMenuItems.map((menuItem: MenuType, index: number) => {
          const key = `${menuItem.id}-${index}`;
          return (
            <MenuItem key={key} menuItem={menuItem}>
              <button
                type='button'
                className='w-2/12 border-2 border-orange-300 rounded-3xl'
                onClick={() => handleRemoveMenu(menuItem)}
              >
                취소
              </button>
            </MenuItem>
          );
        })}
      </ul>
      <div className='flex justify-end bg-amber-50 mr-3'>
        <button
          className='py-2 px-2 text-sm font-bold bg-teal-400 text-white rounded-xl'
          type='button'
        >
          합계: {formattedPrice}원 주문
        </button>
      </div>
    </section>
  );
}
