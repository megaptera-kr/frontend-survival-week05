import { useEffect, useState } from 'react';

import readRestaurants from '../api/restaurants.api';

import RestaurantType from '../types/RestaurantsType';

function useRestaurants(
  restaurantName = '',
  categoryName = '',
): RestaurantType[] {
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data: RestaurantType[] = await readRestaurants(
        restaurantName,
        categoryName,
      );

      setRestaurants(data);
    };

    fetchData();
  }, [restaurantName, categoryName]);

  return restaurants;
}

export default useRestaurants;
