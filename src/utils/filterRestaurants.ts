import { Restaurant } from '../types/restaurants';

type filterRestaurantsOptions = {
  searchKeyword: string;
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  {
    searchKeyword,
  }: filterRestaurantsOptions,
) {
  return restaurants.filter((restaurant) => (
    restaurant.name.includes(searchKeyword.trim())
  ));
}
