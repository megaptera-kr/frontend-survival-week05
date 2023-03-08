import fixtures from '../fixtures';

import filterRestaurants from './filterRestaurants';

const context = describe;

describe('filterRestaurants', () => {
  context('두 조건 모두 있을때', () => {
    it('두 조건에 맞는 값을 리턴', () => {
      const filterText = '김밥';
      const filterCategory = '한식';
      const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
        filterText,
        filterCategory,
      });
      expect(filteredRestaurants).toHaveLength(1);
    });
  });

  context('카테고리만 있을때', () => {
    it('카테고리에 맞는 값을 모두 리턴', () => {
      const filterText = '';
      const filterCategory = '한식';
      const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
        filterText,
        filterCategory,
      });
      expect(filteredRestaurants[0].category).toEqual('한식');
    });
  });

  context('filterText만 있을때', () => {
    it('filterText에 맞는 값을 모두 리턴', () => {
      const filterText = '반점';
      const filterCategory = '전체';
      const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
        filterText,
        filterCategory,
      });

      expect(filteredRestaurants[0].category).toEqual('중식');
    });
  });
});
