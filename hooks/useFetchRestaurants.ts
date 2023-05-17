import { useFetch } from 'usehooks-ts';
import Restaurant from '../src/types/restaurants';

type RestaurantData = {
  restaurants: Restaurant[];
}

export default function useFetchRestaurants(): Restaurant[] {
  const url = 'http://localhost:3000/restaurants';
  const { data } = useFetch<RestaurantData>(url) || [];
  if (!data) return [];

  return data.restaurants;
}
