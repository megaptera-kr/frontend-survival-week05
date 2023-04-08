import Restaurants from '../types/Restaurants';
import RestaurantsTable from './RestaurantsTable';
import RestaurantsRow from './RestaurantsRow';

interface FilterableRestaurantsTableProps {
  restaurants: Restaurants[];
}

export default function FilterableRestaurantsTable({
  restaurants,
}: FilterableRestaurantsTableProps) {
  return (
    <table>
      <RestaurantsTable />
      <RestaurantsRow restaurants={restaurants} />
    </table>
  );
}
