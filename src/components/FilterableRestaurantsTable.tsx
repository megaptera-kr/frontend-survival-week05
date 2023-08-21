import { useState } from 'react';

import RestaurantsTable from './RestaurantsTable';
import SearchBar from './SearchBar';

import useFetchRestaurants from '../hooks/useFetchRestaurants';
import filterRestaurants from '../utils/filterRestaurants';
import DEFAULT_SELECTED_CATEGORY from '../constants/categories';
import selectCategories from '../utils/selectCategories';

export default function FilterableRestaurantsTable() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setCategory] = useState(DEFAULT_SELECTED_CATEGORY);
  const restaurants = useFetchRestaurants();

  const filteredRestaurants = filterRestaurants(restaurants, {
    searchKeyword,
    selectedCategory,
  });

  const categories = selectCategories(restaurants);

  return (
    <>
      <SearchBar
        value={searchKeyword}
        setValue={setSearchKeyword}
        categories={categories}
        setCategory={setCategory}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
    </>
  );
}
