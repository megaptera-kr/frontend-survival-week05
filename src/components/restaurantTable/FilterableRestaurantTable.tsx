import { useState } from 'react';

import Restaurant from '../../types/Restaurant';
import filterRestaurants from '../../utils/filterRestaurants';
import extractCategories from '../../utils/extractCategories';
import RestaurantTable from './RestaurantTable';
import SearchBar from '../searchBar/SearchBar';

type FilterableRestaurantTableProps = {
  restaurants: Restaurant[]
}

function FilterableRestaurantTable(
  { restaurants }: FilterableRestaurantTableProps,
) {
  const [text, setText] = useState<string>('');
  const [category, setCategory] = useState<string>('전체');

  const categories = extractCategories(restaurants);
  const filteredRestaurants = filterRestaurants(restaurants, { text, category });

  return (
    <div>
      <SearchBar
        text={text}
        setText={setText}
        categories={categories}
        setCategory={setCategory}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
    </div>
  );
}

export default FilterableRestaurantTable;
