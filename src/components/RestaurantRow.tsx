import Menu from './Menu';

import RestaurantType from '../types/RestaurantsType';

type RestaurantRowProps = {
  restaurant: RestaurantType;
};

export default function RestaurantRow({ restaurant }: RestaurantRowProps) {
  const { name, category, menu } = restaurant;
  return (
    <tr>
      <td className='text-center whitespace-nowrap border'>{name}</td>
      <td className='text-center whitespace-nowrap border'>{category}</td>
      <td className='text-center whitespace-nowrap border'>
        <Menu menu={menu} />
      </td>
    </tr>
  );
}
