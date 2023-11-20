import URL from '../constants/constants';

const useGetRestaurants = async () => {
  try {
    const response = await fetch(`${URL.BASE_URL}/restaurants`);
    const restaurants = await response.json();
    return restaurants;
  } catch (error) {
    throw Error('에러가 발생하였습니다.');
  }
};

export default useGetRestaurants;
