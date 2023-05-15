import { useFetch } from 'usehooks-ts';

import type { Restaurant, RestaurantResponse } from '../../../types/restaurants';

interface UseFetchRestaurants {
  restaurants: Restaurant[];
}

const URL = 'http://localhost:3000/restaurants';

export default function useFetchRestaurants(): UseFetchRestaurants {
  const { data } = useFetch<RestaurantResponse>(URL);

  return { restaurants: data?.restaurants ?? [] };
}
