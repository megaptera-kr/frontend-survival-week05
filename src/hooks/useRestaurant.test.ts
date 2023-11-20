import restaurants from '../../fixtures/restaurants';

const context = describe;

describe('조회된 레스토랑 목록을 기준으로 필터링을 진행한다.', () => {
  context('종류별로 레스토랑 목록이 조회된다.', () => {
    it('중식을 조회한다.', () => {
      const filteredRestaurants = restaurants.filter((restaurant) => restaurant.category === '중식');
      const testCase = filteredRestaurants.filter((restaurant) => restaurant.category !== '중식');

      expect(testCase.length === 0).toBeTruthy();
    });
  });

  context('검색어가 포함되어 있는 목록이 조회된다.', () => {
    it('메가를 검색한다.', () => {
      const filteredRestaurants = restaurants.filter((restaurant) => restaurant.name.includes('메가'));
      expect(filteredRestaurants.length === 2).toBeTruthy();
    });
  });
});
