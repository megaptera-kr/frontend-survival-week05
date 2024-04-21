import Restaurant from '../../types/Restaurant';
import RestaurantTableHeader from '../RestaurantTableHeader';
import RestaurantTableRow from '../RestaurantTableRow';

type RestaurantTableProps = {
  restaurants:Restaurant[]
}

function RestaurantTable({ restaurants }: RestaurantTableProps) {
  return (
    <table style={{ marginTop: '1rem' }}>
      <RestaurantTableHeader />
      <tbody>
        {restaurants.map((restaurant) => (
          <RestaurantTableRow key={restaurant.id} restaurant={restaurant} />
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
