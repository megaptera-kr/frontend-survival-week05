import { useState } from 'react';
import TextField from './TextField';
import CategoryButtons from './CategoryButtons';
import RestaurantTable from './RestaurantTable';
import useFetchProducts from '../hooks/useFetchRestaurants';
import filterRestaurant from '../utils/filterRestaurant';
import { Category } from '../types';

function FilterableRestaurantTable() {
  const [query, setQuery] = useState<string>('');
  const [category, setCategory] = useState<Category>('전체');

  const data = useFetchProducts();
  const filterData = filterRestaurant(data, { query, category });

  return (
    <div>
      <TextField label="검색" value={query} setValue={setQuery} placeholder="식당 이름" />
      <CategoryButtons setCategory={setCategory} />
      <RestaurantTable restaurants={filterData} />
    </div>
  );
}

export default FilterableRestaurantTable;
