import useFetchRestaurants from '../hooks/useFetchRestaurants';

export default function filterRestaurant({ filterText, filterCategory }: {
  filterText: string;
  filterCategory: string;
}) {
  const restaurants = useFetchRestaurants();

  let filteredRestaurants = restaurants;

  const query = filterText.trim().toLowerCase();

  const filteredName = filteredRestaurants
    .filter((filteredRestaurant) => filteredRestaurant.name.includes((query).toLowerCase()));

  const filteredCategory = filteredRestaurants
    .filter((categories) => categories.category === filterCategory);

  if (query) {
    filteredRestaurants = filteredName;
  }

  if (filterCategory !== '전체') {
    filteredRestaurants = filteredCategory;
  }

  return filteredRestaurants;
}
