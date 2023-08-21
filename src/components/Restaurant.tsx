import { useState } from 'react';

import { useInterval } from 'usehooks-ts';
import Cart from './Cart';
import SearchBar from './SearchBar';
import RestaurantTable from './RestaurantTable';
import Receipt from './Receipt';
import useFetchRestaurants from '../hooks/useFetchRestaurants';
import filterRestaurant from '../utils/filterRestaurant';
import type { ReceiptType } from '../types/restaurants';

function Restaurant() {
  const restaurants = useFetchRestaurants();

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('전체');
  const [receipt, setReceipt] = useState<ReceiptType>({} as ReceiptType);

  const filteredRestaurants = filterRestaurant(restaurants, { query, category });

  useInterval(() => {
    if (receipt.id) {
      setReceipt({} as ReceiptType);
    }
  }, receipt.id ? 5000 : null);

  return (
    <div>
      <h1>푸드코트 키오스크</h1>
      <Cart setReceipt={setReceipt} />
      <SearchBar
        restaurants={restaurants}
        setQuery={setQuery}
        setCategory={setCategory}
      />
      <RestaurantTable restaurants={filteredRestaurants} />
      <Receipt receipt={receipt} />
    </div>
  );
}

export default Restaurant;
