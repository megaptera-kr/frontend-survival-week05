import Restaurant from '../type/Restaurants';

export default function filterRestaurants(
  restaurants:Restaurant[],
  filterText:string,
  filterCategory:string,
):Restaurant[] {
  return restaurants.filter((restaurant) => ((restaurant.name).includes(filterText.trim()))).filter((restaurant) => ((restaurant.category === filterCategory) || filterCategory === '전체'));
}
