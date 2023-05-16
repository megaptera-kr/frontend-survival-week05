import { useState } from 'react';

import FilterableRestaurant from './filterable/FilterableRestaurant';
import RestaurantsTable from './RestaurantsTable';

import RestaurantsContext from '../../hooks/context/RestaurantsContext';
import useFetchRestaurants from '../../hooks/useFetchRestaurants';

import filterRestaurants from '../utils/filterRestaurants';
import filterableCategories from '../utils/filterCategories';

import Restaurant from '../types/restaurants';

export default function FilterableRestaurantTable() {
  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');

  const restaurants = useFetchRestaurants();

  const filterCategories = filterableCategories(restaurants);
  const filteredRestaurants: Restaurant[] = filterRestaurants(restaurants, { filterCategory, filterText });

  return (
    <RestaurantsContext.Provider value={filteredRestaurants}>
      <FilterableRestaurant
        filterCategories={filterCategories}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantsTable />
    </RestaurantsContext.Provider>
  );
}
