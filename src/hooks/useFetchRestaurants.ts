import { useFetch } from 'usehooks-ts';

import Restaurant from '../types/Restaurant';
import { BASE_URL } from '../constants/api';

interface Restaurants {
  [restaurants: string]: Restaurant[];
}

function useFetchRestaurants() {
  const { data } = useFetch<Restaurants>(`${BASE_URL}/restaurants`);

  if (!data) {
    return [];
  }

  return data.restaurants;
}

export default useFetchRestaurants;
