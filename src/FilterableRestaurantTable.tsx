import { useState } from 'react';

import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

import filterRestaurant from './utils/filterRestaurant';
import filterCategories from './utils/filterCategories';

import Restaurants from './types/Restaurants';

type FilterableRestaurantTableProps = {
  restaurants : Restaurants[];
}

function FilterableRestaurantTable({ restaurants }:FilterableRestaurantTableProps) {
  const [query, setQuery] = useState<string>('');
  const [category, setCategory] = useState<string>('전체');

  const filteredRestarants = filterRestaurant({ restaurants, filterText: query });

  const filteredCategories = filterCategories({ restaurants: filteredRestarants, category });

  const categories = restaurants?.reduce(
    (acc: string[], restaurant) => (acc.includes(restaurant.category)
      ? acc : [...acc, restaurant.category]),
    [],
  );
  return (
    <div>
      <SearchBar
        categories={categories}
        setCartegory={setCategory}
        query={query}
        setQuery={setQuery}
      />
      <div>
        <RestaurantTable filteredCategories={filteredCategories} />
      </div>
    </div>
  );
}

export default FilterableRestaurantTable;
