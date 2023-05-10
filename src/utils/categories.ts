import { Restaurants } from '../types';

export default function categories(restaurants?: Restaurants[]):string[] {
  if (!restaurants) {
    return ['전체'];
  }
  return restaurants.reduce(
    (acc, restaurant) => (
      acc.includes(restaurant.category) ? acc : [...acc, restaurant.category])
    , ['전체'],
  );
}
