import RestaurantType from '../types/RestaurantsType';

async function readRestaurants(
  restaurantName = '',
  categoryName = '',
): Promise<RestaurantType[]> {
  const url = new URL('http://localhost:3000/restaurants');
  const params = new URLSearchParams();

  params.append('restaurantName', restaurantName);
  params.append('categoryName', categoryName);
  url.search = params.toString();

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch categories data. Status: ${response.status}`,
      );
    }

    return await response.json();
  } catch (error) {
    return [];
  }
}

export default readRestaurants;
