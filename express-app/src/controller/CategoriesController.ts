import { Express } from 'express';

import restaurants from '../database/restaurants.table';

import RestaurantType from '../types/RestaurantType';
import CategoryType from '../types/CategoryType';

function CategoryController(app: Express) {
  app.get('/categories', (req, res) => {
    const uniqueCaterogies = new Set();
    restaurants.forEach((restaurant: RestaurantType) => {
      uniqueCaterogies.add(restaurant.category);
    });
    const categories: CategoryType[] = Array.from(uniqueCaterogies).map(
      (item, i) => ({
        id: i + 1,
        name: item as string,
      }),
    );

    res.send(categories);
  });
}

export default CategoryController;
