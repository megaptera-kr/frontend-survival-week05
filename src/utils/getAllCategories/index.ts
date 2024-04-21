import Category from '../../types/Category';
import Restaurant from '../../types/Restaurant';

function getAllCategories(restaurants?:Restaurant[]|null):Category[] {
  if (!restaurants) {
    return ['전체'];
  }
  return ['전체', ...restaurants.map((restaurant) => restaurant.category)];
}

export default getAllCategories;
