import Restaurant from '../types/Restaurant';

export default function extractCategories(restaurants: Restaurant[]) {
  const categories = new Set(['전체']);

  restaurants.forEach((restaurant) => {
    categories.add(restaurant.category);
  });

  return [...categories];
}
