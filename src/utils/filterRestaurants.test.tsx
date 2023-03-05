import fixtures from '../../fixtures';
import filterRestaurants from './filterRestaurants';

// 검색어와 버튼에 따라 레스토랑 필터링 해주는 함수

const context = describe;

describe('filterRestaurants', () => {
  const { restaurants } = fixtures;
  let filterText = '';
  let filterCategory = '전체';

  context('with entire button and without filterText', () => {
    it('returns entire data', () => {
      const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });

      expect(filteredRestaurants).toBe(restaurants);
    });
  });

  context('with Chinese button and without filterText', () => {
    it('returns only Chinese restaurant data', () => {
      filterCategory = '중식';
      const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });
      const chinese = restaurants.filter((restaurant) => restaurant.category === filterCategory);

      expect(filteredRestaurants).toStrictEqual(chinese);
    });
  });

  context('with 메리 in entire', () => {
    it('returns only 메리김밥', () => {
      filterText = '메리';
      filterCategory = '전체';
      const filteredRestaurants = filterRestaurants(restaurants, { filterText, filterCategory });
      expect(filteredRestaurants[0].name).toBe('메리김밥');
    });
  });
});
