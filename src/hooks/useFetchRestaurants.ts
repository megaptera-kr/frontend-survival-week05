import { BASE_URL } from "../constants/constants";

const useFetchRestaurants = async () => {
  const response = await fetch(`${BASE_URL}/restaurants`)
  const restaurants = await response.json()
  return restaurants
};

export default useFetchRestaurants
