import Restaurant from '../types/Restaurants';
import MenuItems from './MenuItems';

type ReataurantRowProps = {
    restaurant: Restaurant;
}

export default function ReataurantRow({ restaurant }: ReataurantRowProps) {
  const { name, category, menu } = restaurant;

  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <MenuItems menu={menu} buttonType="선택" />
      </td>
    </tr>
  );
}
