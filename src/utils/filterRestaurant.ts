import { Category, Restaurant } from '../types';

type Option = {
    query : string;
    category : Category
}
const nomalize = (text: string) => text.trim().toLowerCase();

const filterRestaurant = (restaurants : Restaurant[], { query, category } : Option) => {
  const filterCategory = category === '전체'
    ? restaurants
    : restaurants.filter((restaurant) => restaurant.category === category);

  const nomalizeQuery = nomalize(query);

  if (!nomalizeQuery) {
    return filterCategory;
  }

  return filterCategory.filter((restaurant) => restaurant.name.includes(nomalizeQuery));
};

export default filterRestaurant;
