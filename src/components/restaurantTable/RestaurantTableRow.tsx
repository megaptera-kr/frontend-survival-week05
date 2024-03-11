import Restaurant from '../../types/Restaurant';
import Menu from './Menu';

type RestaurantTableRow = {
  restaurant: Restaurant
}

function RestaurantTableRow(
  { restaurant }: RestaurantTableRow,
) {
  const { name, category, menu } = restaurant;

  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td><Menu menu={menu} /></td>
    </tr>
  );
}

export default RestaurantTableRow;
