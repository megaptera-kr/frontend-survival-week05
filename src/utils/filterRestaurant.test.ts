import filterRestaurant from './filterRestaurant';

import restaurants from '../../fixtures/restaurants';

const context = describe;
describe('filterRestaurant', () => {
  context('검색 내용 미입력', () => {
    it('입력값과 결과 값이 같다.', () => {
      const filteredRestaurant = filterRestaurant({ restaurants, filterText: '' });
      expect(filteredRestaurant.length).toBe(restaurants.length);
    });
  });

  context('메리 검색', () => {
    it('검색 결과 값이 3이다.', () => {
      const filteredRestaurant = filterRestaurant({ restaurants, filterText: '메리' });
      expect(filteredRestaurant.length).toBe(1);
    });
  });
});
