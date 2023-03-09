import fixtures from '../fixtures';
import Restaurant from '../types/Restaurant';
import filterRestaurants from './filterRestaurants';

const context = describe;

let restaurants: Restaurant[];
let filterText: string;
let filterCategory: string;

describe('filterRestaurants', () => {
  context('검색어가 없고 전체 카테고리를 선택하면', () => {
    beforeEach(() => {
      restaurants = fixtures.restaurants;
      filterText = '';
      filterCategory = '전체';
    });

    it('레스토랑 목록 전체가 렌더된다', () => {
      const result = filterRestaurants(restaurants, { filterText, filterCategory });

      expect(result[0].category).toBe('일식');
      expect(result[1].name).toBe('중국집');
    });
  });

  context('검색어가 "중국집"이고 전체 카테고리를 선택하면', () => {
    beforeEach(() => {
      restaurants = fixtures.restaurants;
      filterText = '중국집';
      filterCategory = '전체';
    });

    it('중국집 레스토랑만 렌더된다', () => {
      const result = filterRestaurants(restaurants, { filterText, filterCategory });

      expect(result[0].category).toBe('중식');
      expect(result[0].name).toBe('중국집');
    });
  });

  context('검색어가 "중국집"이고 일식 카테고리를 선택하면', () => {
    beforeEach(() => {
      restaurants = fixtures.restaurants;
      filterText = '중국집';
      filterCategory = '일식';
    });

    it('아무것도 없다', () => {
      const result = filterRestaurants(restaurants, { filterText, filterCategory });

      expect(result.length).toBeFalsy();
    });
  });
});
