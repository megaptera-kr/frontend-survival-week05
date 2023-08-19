import useFetchRestaurants from '../hooks/useFetchRestaurants';
import RestaurantsTable from './RestaurantsTable';

export default function FilterableRestaurantsTable() {
  const restaurants = useFetchRestaurants();

  return <RestaurantsTable restaurants={restaurants} />;
}
