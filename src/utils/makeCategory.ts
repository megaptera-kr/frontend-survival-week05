import { Restaurant } from '../types/restaurant';

export default function makeCategory(data : Restaurant []) {
  return data.reduce((acc : string [], curr : Restaurant) => {
    return [...acc, curr.category]
  }, []);
}
