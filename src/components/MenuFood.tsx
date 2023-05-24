import Food from '../type/Food';

type MenuFoodProps = {
  menu : Food
}

export default function MenuFood({ menu }: MenuFoodProps) {
  return (
    <li>
      {menu.name}
      (
      {menu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      원)
    </li>
  );
}
