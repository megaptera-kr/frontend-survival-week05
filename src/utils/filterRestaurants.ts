import Restaurant from '../types/Restaurants';

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

type filterCondition = {
        filterText: string;
        filterCategory: string;
}

export default function filterRestaurants(restaurants: Restaurant[], {
  filterText, filterCategory,
}: filterCondition) {
  let filteredRestaurants = filterCategory === '전체'
    ? restaurants
    : restaurants.filter((restaurant) => restaurant.category === filterCategory);

  if (filterText.length) {
    const query = normalize(filterText);

    filteredRestaurants = filteredRestaurants.filter((restaurant) => (
      normalize(restaurant.name).includes(query)
    ));
  }

  return filteredRestaurants;
}
