import { RestaurantListProps } from '../interfaces/RestaurantList.interface';

function RestaurantList({ restaurants }: RestaurantListProps) {
  return (
    <>
      {
        restaurants?.map(
          restaurant => <p key={restaurant.id}>{restaurant.name}</p>)
      }
    </>
  );
}

export default RestaurantList;
