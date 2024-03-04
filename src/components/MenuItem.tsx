import MenuType from '../types/MenuType';

type MenuItemProps = {
  menuItem: MenuType;
};

export default function MenuItem({ menuItem }: MenuItemProps) {
  const { name, price } = menuItem;
  return (
    <li className='flex flex-row items-center w-full py-0.2 text-sm'>
      <span className='w-9/12 ml-2'>
        {name}({price}원)
      </span>
      <button
        className='font-bold bg-teal-400 text-white rounded-xl mr-2 w-3/12 h-8'
        type='button'
      >
        선택
      </button>
    </li>
  );
}
