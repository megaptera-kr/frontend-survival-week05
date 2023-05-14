import Restaurant from '../types/Restaurant';

function normalize(text: string) {
  return text.trim();
}

type filterConditions = {
    filterText: string;
    filterCategory: string;
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, filterCategory }: filterConditions,
): Restaurant[] {
  const categoryMatch = (restaurant: Restaurant) => (restaurant.category === filterCategory);
  const filteredRestaurants = filterCategory === '전체'
    ? restaurants
    : restaurants.filter(categoryMatch);

  const textQuery = normalize(filterText);
  if (!textQuery) { return filteredRestaurants; }
  const contains = (restaurant: Restaurant) => (
    normalize(restaurant.name).includes(textQuery)
  );

  return filteredRestaurants.filter(contains);
}
