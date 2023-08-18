import type { FilterRestaurantConditions, Restaurants } from '../types/restaurants';

export default function filterRestaurant(
  restaurants: Restaurants[],
  {
    query,
    category,
  }: FilterRestaurantConditions,
) {
  const filteredRestaurants = restaurants.filter((restaurant) => {
    if (category === '전체') return restaurant;
    return restaurant.category === category;
  });

  const filteredByQuery = filteredRestaurants.filter(
    (restaurant) => {
      const searchString = query.trim();
      return restaurant.name.includes(searchString);
    },
  );

  return filteredByQuery;
}
