import useRestaurants from '../hooks/useRestaurants';

import RestaurantRow from './RestaurantRow';

import RestaurantType from '../types/RestaurantsType';

type RestaurantTableProps = {
  restaurantName: string;
  categoryName: string;
};

export default function RestaurantTable({
  restaurantName,
  categoryName,
}: RestaurantTableProps) {
  const filteredRestaurants: RestaurantType[] = useRestaurants(
    restaurantName,
    categoryName,
  );

  return (
    <section className='mx-3 py-4'>
      <table className='w-full'>
        <thead>
          <tr>
            <th className='w-2/12 border'>식당 이름</th>
            <th className='w-2/12 border'>종류</th>
            <th className='w-10/12 border'>메뉴</th>
          </tr>
        </thead>
        <tbody>
          {filteredRestaurants.map((restaurant: RestaurantType) => (
            <RestaurantRow key={restaurant.id} restaurant={restaurant} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
