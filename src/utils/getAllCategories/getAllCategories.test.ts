import getAllCategories from '.';
import fixtures from '../../../fixtures';

const context = describe;
describe('getAllCategories 함수', () => {
  const { restaurants } = fixtures;

  context('Restaurants 데이터가 주어지면', () => {
    it('"전체"가 포함된 Restaurants 데이터의 Category들로 구성된 배열을 반환한다.', () => {
      expect(getAllCategories(restaurants)).toEqual(['전체', '중식', '한식', '일식']);
    });
  });

  context('Restaurants 데이터가 null,undefined 이면', () => {
    it('"전체"만 포함된 Category 배열을 반환한다.', () => {
      expect(getAllCategories(null)).toEqual(['전체']);
      expect(getAllCategories(undefined)).toEqual(['전체']);
    });
  });
});
