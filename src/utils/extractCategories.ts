import type { Restaurants } from '../types/restaurants';

export default function extractCategories(restaurants: Restaurants[]) {
  const categories = restaurants.map((restaurant) => restaurant.category);

  return ['전체', ...new Set(categories)];
}
