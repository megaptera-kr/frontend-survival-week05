import Menu from './Menu';

import type Restaurant from '../types/Restaurants';

type RestaurantTableRowType = {
    restaurant: Restaurant
}

export default function RestaurantTableRow({ restaurant }: RestaurantTableRowType) {
  const { name, category, menu } = restaurant;

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
