import { useState } from 'react';

import RestaurantsTable from './RestaurantsTable';
import SearchBar from './SearchBar';

import useFetchRestaurants from '../hooks/useFetchRestaurants';

import filterRestaurants from '../utils/filterRestaurants';

export default function FilterableRestaurantsTable() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const restaurants = useFetchRestaurants();

  const filteredRestaurants = filterRestaurants(restaurants, { searchKeyword });

  return (
    <>
      <SearchBar
        value={searchKeyword}
        setValue={setSearchKeyword}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
    </>
  );
}
