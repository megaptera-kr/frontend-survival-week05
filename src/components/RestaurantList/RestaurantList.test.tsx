import { render, screen, waitFor } from '@testing-library/react';
import useGetRestaurants from '../../hooks/useGetRestaurants';
import { RestaurantListInterface } from '../../interfaces/RestaurantList.interface';
import RestaurantList from './RestaurantList';

const context = describe;

let restaurants: RestaurantListInterface[] = [];
let categories: string[] = ['전체'];

const handleAddCart = () => {
  // eslint-disable-next-line no-console
  console.log('handle Add Cart');
};

describe('레스토랑 리스트가 화면에 표현된다.', () => {
  context('레스토랑 목록을 호출한다.', () => {
    it('레스토랑목록이 올바르게 수신된다.', async () => {
      restaurants = await useGetRestaurants();
      expect(restaurants.length > 0).toBeTruthy();
    });

    it('레스토랑 목록에는 메가반점이 있다.', () => {
      const restaurant : RestaurantListInterface | undefined = restaurants.find((data: RestaurantListInterface) => data.name === '메가반점');
      expect(restaurant?.name === '메가반점').toBeTruthy();
    });

    it('레스토랑 목록은 전체, 중식, 한식, 일식으로 총 3건이 나온다.', () => {
      categories = restaurants.reduce((acc: string[], cur) => (acc?.includes(cur.category) ? acc : [...acc, cur.category]), ['전체']);
      expect(categories.length).toBe(4);
    });

    it('업종의 카테고리에는 한식이 있다.', () => {
      expect(categories.includes('한식')).toBeTruthy();
    });

    it('업종의 카테고리에는 일식이 있다.', () => {
      expect(categories.includes('일식')).toBeTruthy();
    });

    it('업종의 카테고리에는 중식이 있다.', () => {
      expect(categories.includes('중식')).toBeTruthy();
    });
  });

  context('레스토랑 리스트에 목록을 불러와서 렌더링을 진행한다.', () => {
    it('메가반점과 메리김밥이 있다.', async () => {
      render(
        <RestaurantList restaurants={restaurants} handleAddCart={handleAddCart} />,
      );
      await waitFor(() => {
        screen.getByText(/메가반점/);
        screen.getByText(/메리김밥/);
      });
    });
  });
});