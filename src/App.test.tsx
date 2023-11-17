import { render, waitFor, screen } from '@testing-library/react';
import { context } from './constants/constants';
import App from './App';
import RestaurantList from './components/RestaurantList';

// const useFetchRestaurants

describe('페이지의 제목이', () => {
  context('맨 위에 제공된다.', () => {
    it('제목은 푸드코트 키오스크', () => {
      render(<App />);
      screen.findByText('푸드코트 키오스크');
    });
  });
});

describe('푸드코드 키오스크에서 ', () => {
  context('식당목록을 호출한다. ', () => {
    it('식당 이름, 종류, 메뉴가 보이는 식당 목록을 조회한다.', async () => {
      const useFetchRestaurants = async () => {
        try {
          const response = await fetch(`${BASE_URL}/products`)
          const data = await response.json()
          return data
        } catch (error) {
          throw Error('에러가 발생하였습니다.')
        }
      };

      const restaurants = await useFetchRestaurants()
      expect(restaurants.length > 0).toBe(restaurants.length > 0)

      render(
        <App>
          <RestaurantList restaurants={restaurants} />
        </App>
      );
      await waitFor(() => {
        screen.getByText(/메가반점/);
        screen.getByText(/메리김밥/);
      });
    });
  })
});
