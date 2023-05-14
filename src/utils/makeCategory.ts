import { Restaurant } from '../types/restaurant';

export default function makeCategory(data: Restaurant[]) {
  return data.reduce((acc: string[], curr: Restaurant) => {
    const { category } = curr;
    return acc.includes(category) ? acc : [...acc, curr.category];
  }, []);
}
