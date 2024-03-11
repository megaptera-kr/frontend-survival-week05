import { useState } from 'react';

import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';

export default function FilterableRestaurantTable() {
  const [restaurantName, setRestaurantName] = useState<string>('');
  const [categoryName, setCategoryName] = useState<string>('전체');

  const handleRestaurantName = (v: string) => {
    setRestaurantName(v);
  };

  const handleCategoryName = (v: string) => {
    setCategoryName(v);
  };

  return (
    <>
      <SearchBar
        searchText={restaurantName}
        searchButton={categoryName}
        setSearchText={handleRestaurantName}
        setCategory={handleCategoryName}
      />
      <RestaurantTable
        restaurantName={restaurantName}
        categoryName={categoryName}
      />
    </>
  );
}
