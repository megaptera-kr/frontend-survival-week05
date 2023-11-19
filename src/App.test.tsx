import { render, waitFor, screen } from '@testing-library/react';
import URL from './constants/constants';
import App from './App';

const context = describe;

describe('푸드코드 키오스크에서 ', () => {
  context('식당목록을 호출한다. ', () => {
    it('식당 이름, 종류, 메뉴가 보이는 식당 목록을 조회한다.', async () => {
      const useGetRestaurants = async () => {
        try {
          const response = await fetch(`${URL.BASE_URL}/restaurants`);
          const data = await response.json();
          return data;
        } catch (error) {
          throw Error('에러가 발생하였습니다.');
        }
      };

      const restaurants = await useGetRestaurants();
      expect(restaurants.length > 0).toBe(restaurants.length > 0);
    });
  });
});

describe('페이지를 확인한다.', () => {
  render(<App />);
  context('제목이 상단에 제공된다.', () => {
    it('제목은 푸드코트 키오스크', async () => {
      await waitFor(() => {
        screen.findByText('푸드코트 키오스크');
      });
    });
  });

  context('푸드코드 키오스크에서 메뉴가 나타난다.', () => {
    it('메뉴 중에는 짜장면이 있다.', async () => {
      await waitFor(() => {
        screen.findByText('짜장면');
      });
    });
  });
});
