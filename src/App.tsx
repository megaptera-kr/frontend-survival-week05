// <restaurants>
// - FilterableRestaurantTable
//  - SearchBar
//   - TextField
//   - Categories
//    - Category
//  - RestaurantTable
//   - RestaurantRow
//    - Menu
//     - MenuItem
import FilterableRestaurantTable from './components/restaurants/FilterableRestaurantTable';

import useFetchRestaurants from './hooks/useFetchRestaurants';

export default function App() {
  const restaurants = useFetchRestaurants();

  return (
    <div>
      <FilterableRestaurantTable restaurants={restaurants} />
    </div>
  );
}
