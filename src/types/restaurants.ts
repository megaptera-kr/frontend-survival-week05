import type { Food } from './food';

export interface Restaurant {
  id: string;
  category: string;
  name: string;
  menu: Food[];
}

export type RestaurantsFilter = {
  searchText: string;
  category: string;
}

export interface RestaurantResponse {
  restaurants: Restaurant[];
}
