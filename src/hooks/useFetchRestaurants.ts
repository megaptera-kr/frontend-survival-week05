import { useFetch } from 'usehooks-ts';
import { Restaurant } from '../types/restaurants';

const url = 'http://localhost:3000/restaurants';

export default function useFetchRestaurants() {
  const { data } = useFetch<{ restaurants: Restaurant[] }>(url);

  return data?.restaurants ?? [];
}
