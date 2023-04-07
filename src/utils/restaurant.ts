import type { Restaurant, RestaurantsFilter } from '../types/restaurants';

export const getCategories = (restaurants: Restaurant[]) => restaurants.reduce((acc, cur) => [...new Set([...acc, cur.category])], ['전체']);

const filterRestaurantCategory = (
  restaurants: Restaurant[]
  , category: string,
): Restaurant[] => (category === '전체' ? restaurants : restaurants.filter((restaurant) => restaurant.category === category));

const filterRestaurantSearch = (
  restaurants: Restaurant[]
  , search: string,
): Restaurant[] => {
  const regexp = new RegExp(`.*${search.trim()}.*`, 'g');

  return search ? restaurants.filter((restaurant) => regexp.test(restaurant.name)) : restaurants;
};

export const filterRestaurants = (
  restaurants: Restaurant[],
  { searchText, category }: RestaurantsFilter,
): Restaurant[] => filterRestaurantCategory(
  filterRestaurantSearch(restaurants, searchText),
  category,
);

export default getCategories;
