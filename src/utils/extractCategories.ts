import Restaurant from '../type/Restaurants';

export default function extractCategories(restaurants: Restaurant[]):string[] {
  return restaurants.reduce((acc:string[], cur:Restaurant) => {
    const { category } = cur;
    return acc.includes(category) ? acc : [...acc, category];
  }, []);
}
