import { ChangeEvent, useState } from 'react';
import SearchBar from './components/SearchBar';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';
import filterRestaurant from './utils/filterRestaurant';

export default function App() {
  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState('전체');

  const filteredRestaurants = filterRestaurant({ filterText, filterCategory });

  const handleChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilterText(value);
  };

  const handleChangeCategory = (name: string) => {
    setFilterCategory(name);
  };

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <SearchBar
        filterText={filterText}
        onChange={handleChangeText}
        onClick={handleChangeCategory}
      />
      <FilterableRestaurantsTable
        restaurants={filteredRestaurants}
      />
    </>
  );
}
