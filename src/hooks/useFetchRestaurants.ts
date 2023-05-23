import { useFetch } from 'usehooks-ts';
import Restaurant from '../types/Restaurant';

const useFetchRestaurants = () => {
  const url = 'http://localhost:3000/restaurants';
  const { data } = useFetch<{ restaurants : Restaurant[] }>(url);

  if (!data) return [];
  return data.restaurants;
};

export default useFetchRestaurants;
