import Category from '../../types/Category';
import Restaurant from '../../types/Restaurant';

function getAllCategories(restaurants?:Restaurant[]|null):Category[] {
  if (!restaurants) {
    return ['전체'];
  }
  return restaurants?.reduce((acc:Category[], restaurant) => (acc.includes(restaurant.category)
    ? acc
    : [...acc, restaurant.category]), ['전체']);
}

export default getAllCategories;
