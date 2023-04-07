import { filterRestaurants, getCategories } from '../../utils/restaurant';
import { useFetchRestaurants, useRestaurantsFilter } from './hooks';
import RestaurantsFilter from './restaurantsFilter/RestaurantsFilter';
import RestaurantsTable from './restaurantTable/RestaurantsTable';

export default function FilterableRestaurantsTable() {
  const { restaurants } = useFetchRestaurants();
  const { filter, handleChangeFilter } = useRestaurantsFilter();

  const categories = getCategories(restaurants);
  const filtredCategories = filterRestaurants(restaurants, filter);

  return (
    <div>
      <RestaurantsFilter
        filter={filter}
        categories={categories}
        handleChangeFilter={handleChangeFilter}
      />
      <RestaurantsTable restaurants={filtredCategories} />
    </div>
  );
}
