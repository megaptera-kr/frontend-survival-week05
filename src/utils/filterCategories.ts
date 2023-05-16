import Restaurant from '../types/restaurants';

export default function filterableCategories(restaurants: Restaurant[]): string[] {
  return restaurants.reduce((acc: string[], restaurant: Restaurant) => {
    const { category } = restaurant;
    return (acc.includes(category)) ? acc : [...acc, category];
  }, ['전체']);
}
