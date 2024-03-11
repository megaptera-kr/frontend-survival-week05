import Restaurant from '../types/Restaurant';

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

type FilterConditions = {
  text: string;
  category: string
}

function filterRestaurants(
  restaurants: Restaurant[],
  { text, category }: FilterConditions,
) {
  const match = (restaurant: Restaurant) => (restaurant.category === category);

  const filteredRestaurants = category === '전체'
    ? restaurants
    : restaurants.filter(match);

  const query = normalize(text);

  if (!query) {
    return filteredRestaurants;
  }

  return filteredRestaurants.filter(
    (restaurant: Restaurant) => (normalize(restaurant.name).includes(query)),
  );
}

export default filterRestaurants;
