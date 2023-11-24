import { useState } from 'react';
import SearchBar from './SearchBar';
import extractCategories from '../utils/extractCategories';
import RestaurantTable from './RestaurantTable';
import filterRestaurants from '../utils/filterRestaurants';

import type Restaurant from '../types/Restaurants';

type FilterableRestaurantTableType = {
  restaurants: Restaurant[]
}

export default function FilterableRestaurantTable({ restaurants }: FilterableRestaurantTableType) {
  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('전체');
  const categories = extractCategories(restaurants);
  const filterData = filterRestaurants(restaurants, { filterText, filterCategory });
  return (
    <div>
      <SearchBar
        filterText={filterText}
        categories={categories}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantTable restaurants={filterData} />
    </div>
  );
}
