import Menu from './Menu';

import Restaurant from '../types/Restaurant';

type RestaurantRowProps = {
  restaurant: Restaurant;
};

export default function RestaurantRow({ restaurant }: RestaurantRowProps) {
  const { category, name, menu } = restaurant;
  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>
        <Menu menu={menu} />
      </td>
    </tr>
  );
}
