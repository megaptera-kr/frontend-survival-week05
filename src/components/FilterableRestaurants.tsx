import { useState } from 'react';
import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';
import filterRestaurants from '../utils/filterRestaurants';
import useFetchRestaurants from '../hooks/useFetchRestaurants';

export default function FilterableRestaurants() {
  const [filterText, setFilterText] = useState<string>('');
  const [selectCategory, setSelectCategory] = useState<string>('전체');
  const restaurants = useFetchRestaurants();
  const filteredRestaurants = filterRestaurants(restaurants, { filterText, selectCategory });

  return (
    <div className="w-1/2 flex flex-col justify-center items-center">
      <SearchBar
        text={filterText}
        setText={setFilterText}
        setSelectCategory={setSelectCategory}
      />
      <RestaurantTable
        filteredRestaurants={filteredRestaurants}
      />
    </div>
  );
}
