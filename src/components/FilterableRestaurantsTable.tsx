import { useState } from 'react';
import Restaurant from '../type/Restaurants';
import extractCategories from '../utils/extractCategories';
import filterRestaurants from '../utils/filterRestaurants';
import FilteredTable from './FilteredTable';
import SearchBar from './SearchBar';

type FilterableRestaurantsTableProps = {
  restaurants : Restaurant[]
}

export default function FilterableRestaurantsTable(
  { restaurants }:
  FilterableRestaurantsTableProps,
) {
  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');
  const category = extractCategories(restaurants);
  const filteredRestaurants = filterRestaurants(restaurants, filterText, filterCategory);

  return (
    <>
      <SearchBar
        category={category}
        filterText={filterText}
        setFilterText={setFilterText}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <FilteredTable restaurants={filteredRestaurants} />
    </>
  );
}
