import { useState } from 'react';
import useFetchRestaurants from '../../hooks/useFetchRestaurants';
import Category from '../../types/Category';
import { filterRestaurants, getAllCategories } from '../../utils';
import CategoryFilter from '../CategoryFilter';
import RestaurantTable from '../RestaurantTable';
import TextField from '../TextField';

function FilterableRestaurantTable() {
  const [filterText, setFilterText] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('전체');

  const restaurants = useFetchRestaurants(); // TODO: MSW 테스트

  const filteredRestaurants = filterRestaurants(
    restaurants,
    { text: filterText, category: selectedCategory },
  );

  const categories = getAllCategories(restaurants);

  return (
    <div className="filterableRestaurantTable">
      <TextField
        label="검색"
        placeholder="식당 이름"
        text={filterText}
        setText={setFilterText}
      />
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
    </div>
  );
}

export default FilterableRestaurantTable;
