import Restaurants from '../types/Restaurants';
import RestaurantsTable from './RestaurantsTable';
import Menu from '../types/Menu';

interface FilterableRestaurantsTableProps {
  restaurants: Restaurants[];
    onAddCart: (menuItem: Menu) => void;
}

export default function FilterableRestaurantsTable({
  restaurants,
  onAddCart,
}: FilterableRestaurantsTableProps) {
  return (
    <RestaurantsTable
      restaurants={restaurants}
      onAddCart={onAddCart}
    />
  );
}
