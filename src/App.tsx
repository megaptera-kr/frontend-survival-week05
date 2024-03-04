import FilterableRestaurantTable from './components/FilterableRestaurantTable';

import useFetchRestaurant from './hooks/useFetchRestaurant';

export default function App() {
  const restaurants = useFetchRestaurant();

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <FilterableRestaurantTable restaurants={restaurants} />
    </>
  );
}
