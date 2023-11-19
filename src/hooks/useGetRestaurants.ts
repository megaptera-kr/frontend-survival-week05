import URL from '../constants/constants';

const useGetRestaurants = async () => {
  const response = await fetch(`${URL.BASE_URL}/restaurants`);
  const restaurants = await response.json();
  return restaurants;
};

export default useGetRestaurants;
