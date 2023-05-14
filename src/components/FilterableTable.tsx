import { useState } from 'react';
import extractCategories from '../utils/extractCategories';
import RestaurantsTable from './RestaurantsTable';
import SearchBar from './SearchBar';
import filterRestaurants from '../utils/filterRestaurants';
import useFetchRestaurants from '../hooks/useFetchRestaurants';

export default function FilterableTable() {
  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');

  const restaurants = useFetchRestaurants();

  const categories = extractCategories(restaurants);

  const filteredRestaurants = filterRestaurants(restaurants, {
    filterText, filterCategory,
  });

  return (
    <>
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
      <RestaurantsTable restaurants={filteredRestaurants} />
    </>
  );
}
