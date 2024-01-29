import Restaurants from '../types/Restaurants';

type FilterRestaurantProps = {
    restaurants: Restaurants[]
    filterText : string;
}
function nomorlize(text: string) {
  return text.trim().toLocaleLowerCase();
}
export default function filterRestaurant({ restaurants, filterText = '' }:FilterRestaurantProps) {
  const query = nomorlize(filterText);

  if (!query) return restaurants;

  const contains = (restaurant: Restaurants) => restaurant.name.includes(query);

  return restaurants.filter(contains);
}
