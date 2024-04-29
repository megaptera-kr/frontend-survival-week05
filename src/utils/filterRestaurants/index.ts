import Category from '../../types/Category';
import Restaurant from '../../types/Restaurant';

function filterRestaurants(
  restaurants:Restaurant[],
  { text, category }: {text: string, category: Category},
):Restaurant[] {
  return restaurants.filter(
    (restaurant) => {
      if (category === '전체') {
        return restaurant.name.includes(text);
      }
      return restaurant.category === category
        && restaurant.name.includes(text);
    },
  );
}

export default filterRestaurants;
