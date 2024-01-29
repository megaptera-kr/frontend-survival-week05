import Restaurants from '../types/Restaurants';

type FilterCategoriesProps = {
    restaurants: Restaurants[]
    category : string
}
export default function filterCategories({ restaurants, category }: FilterCategoriesProps) {
  if (category === '전체') {
    return restaurants;
  }
  const contain = (restaurant: Restaurants) => restaurant.category === category;

  return restaurants.filter(contain);
}
