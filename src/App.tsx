import { useFetch } from 'usehooks-ts';
import Restaurants from './types/Restaurants';
import SearchBar from './components/SearchBar';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';

export default function App() {
  const fetchRestaurants = () => {
    const url = 'http://localhost:3000/restaurants';
    const { data } = useFetch<{restaurants: Restaurants[]}>(url);
    if (!data) {
      return [];
    }
    console.log(data.restaurants);
    return data.restaurants;
  };

  const restaurants = fetchRestaurants();

  return (
    <>
      <h1>푸드코트 키오스크</h1>
      <SearchBar />
      <FilterableRestaurantsTable restaurants={restaurants} />
    </>
  );
}
