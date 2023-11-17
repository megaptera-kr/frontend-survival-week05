import { useEffect, useState } from 'react';
import useFetchRestaurants from './hooks/useFetchRestaurants';
import RestaurantList from './components/RestaurantList';

export default function App() {
  const [restaurants, setRestaurants] = useState([])

  useEffect(() => {
    const getRestaurants = async () => {
      const response = await useFetchRestaurants()
      setRestaurants([...response.restaurants])
    }
    getRestaurants()
  }, [])
  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <RestaurantList restaurants={restaurants} />
    </>
  );
}
