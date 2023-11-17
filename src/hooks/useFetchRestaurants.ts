
const BASE_URL = 'http://localhost:3000'

const useFetchRestaurants = async () => {
  try {
    const response = await fetch(`${BASE_URL}/restaurants`)
    const { restaurants } = await response.json()
    return restaurants
  } catch (error) {
    throw Error('에러가 발생하였습니다.')
  }
};

export default useFetchRestaurants
