import useSelectedMenu from '../hooks/useSelectedMenu';

import MenuItem from './MenuItem';
import OrderButtonInCart from './OrderButtonInCart';

import MenuType from '../types/MenuType';

export default function Cart() {
  const { selectedMenuItems, handleRemoveMenu } = useSelectedMenu();

  return (
    <section className='w-full bg-white'>
      <div className='bg-slate-700'>
        <h2 className='ml-3 py-4 text-xl font-bold text-white'>점심 바구니</h2>
      </div>

      <ul className='flex flex-col bg-amber-50 rounded-lg p-3'>
        {selectedMenuItems.map((menuItem: MenuType, index: number) => {
          const key = `cart-${menuItem.id}-${index}`;
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
        <OrderButtonInCart menuItems={selectedMenuItems} />
      </div>
    </section>
  );
}
