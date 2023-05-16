import filterableCategories from './filterCategories';

import useFetchRestaurants from '../../hooks/__mocks__/useFetchRestaurants';

import Restaurant from '../types/restaurants';

describe('filterCategories ', () => {
  let restaurant = [] as Restaurant[];

  it('필터하려는 데이터가 없을 때', () => {
    expect(filterableCategories(restaurant)).toEqual(['전체']);
  });
  it('필터하려는 데이터가 있을 때', () => {
    restaurant = useFetchRestaurants();
    expect(filterableCategories(restaurant)).toEqual(['전체', '중식', '한식', '일식']);
  });
});
