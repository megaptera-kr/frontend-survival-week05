import filterRestaurants from './filterRestaurants';

import fixtures from '../fixtures';

describe('filterRestaurants', () => {
  it('filterText 가 없고, filterCategory 가 전체일 경우 모든 레스토랑을 반환한다.', () => {
    const result = filterRestaurants(fixtures.restaurants, { filterText: '', filterCategory: '전체' });

    expect(result).toEqual(fixtures.restaurants);
  });

  it('카테고리 별로 레스토랑을 필터링 해야 한다.', () => {
    const result = filterRestaurants(fixtures.restaurants, { filterText: '', filterCategory: '중식' });

    expect(result).toEqual(fixtures.restaurants.filter((restaurant) => restaurant.category === '중식'));
  });

  it('filterText 입력 시 이름별로 레스토랑을 필터링 해야 한다.', () => {
    const result = filterRestaurants(fixtures.restaurants, { filterText: '메가', filterCategory: '전체' });

    expect(result).toEqual(fixtures.restaurants.filter((restaurant) => restaurant.name === '메가반점'));
  });

  it('filterText 가 있고, filterCategory 가 선택됬을 경우 해당 레스토랑을 반환해야 한다.', () => {
    const result = filterRestaurants(fixtures.restaurants, { filterText: '메가', filterCategory: '중식' });

    expect(result).toEqual(fixtures.restaurants.filter((restaurant) => restaurant.name === '메가반점'));
  });
});
