import { useEffect, useState } from 'react';
import Restaurant from '../types/Restaurant';

function useFetchRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  useEffect(() => {
    async function fetchRestaurants() {
      const url = 'http://localhost:3000/restaurants';
      const response = await fetch(url);
      const data = await response.json();
      setRestaurants(data.restaurants);
    }
    fetchRestaurants();
  }, []);

  return restaurants;
}

export default useFetchRestaurants;
