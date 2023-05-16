import Restaurant from '../types/restaurants';

interface FilterCondition {
  filterText: string;
  filterCategory: string;
}

function trimQuery(text: string) {
  return text.trim().toLocaleLowerCase();
}

export default function filterRestaurants(restaurants: Restaurant[], { filterCategory, filterText }: FilterCondition): Restaurant[] {
  let filteredRestaurants = restaurants;

  const query = trimQuery(filterText);

  if (filterCategory !== '전체') {
    filteredRestaurants = filteredRestaurants
      .filter((restaurant) => restaurant.category === filterCategory);
  }
  return filteredRestaurants.filter((restaurant) => restaurant.name.includes(query));
}
