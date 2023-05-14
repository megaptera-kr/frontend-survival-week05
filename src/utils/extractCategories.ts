import { Restaurant } from '../types/restaurant';

export default function extractCategories(data: Restaurant[]) {
  return data.reduce((acc: string[], curr: Restaurant) => {
    const { category } = curr;
    return acc.includes(category) ? acc : [...acc, curr.category];
  }, []);
}
