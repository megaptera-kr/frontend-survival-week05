import { Restaurants } from '../types';

type FilterConditions = {
  filterText: string;
  selectCategory: string;
}
export default function filterRestaurants(
  restaurants: Restaurants[] | undefined,
  { filterText, selectCategory }:FilterConditions,
):Restaurants[] | [] {
  if (!restaurants) {
    return [];
  }

  const filteredRestaurants = selectCategory === '전체'
    ? restaurants
    : restaurants.filter((restaurant) => restaurant.category === selectCategory);

  const query = filterText.trim();

  if (!query) {
    return filteredRestaurants;
  }

  return filteredRestaurants
    .filter((filteredRestaurant) => filteredRestaurant.name.includes(query));
}
