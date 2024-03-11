import { HTMLAttributes } from 'react';

import MenuType from '../types/MenuType';
import { moneyformat } from '../utils/common';

type MenuItemProps = {
  menuItem: MenuType;
} & HTMLAttributes<Element>;

export default function MenuItem({ menuItem, children }: MenuItemProps) {
  const { name, price } = menuItem;
  return (
    <li className='flex flex-row items-center py-0.2 text-sm'>
      <span className='w-9/12 ml-2'>
        {name}({moneyformat(price)}원)
      </span>
      {children}
    </li>
  );
}
