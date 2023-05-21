import Restaurant from '../types/Restaurant';

const filterRestaurants = (
  restaurants: Restaurant[],
  filterText: string,
  filterCategory: string,
) => {
  const normalize = (text: string) => text.trim();

  const filteringWithText = restaurants.filter((restaurant) => (
    restaurant.name.includes(normalize(filterText))
  ));

  if (filterCategory === '전체') return filteringWithText;

  return filteringWithText.filter((restaurant) => (
    restaurant.category === filterCategory
  ));
};

export default filterRestaurants;
