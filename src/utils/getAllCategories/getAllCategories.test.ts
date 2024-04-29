import getAllCategories from '.';
import fixtures from '../../../fixtures';
import Restaurant from '../../types/Restaurant';

const context = describe;
describe('getAllCategories 함수', () => {
  const { restaurants } = fixtures;
  const categories = ['전체', '중식', '한식', '일식'];

  context('Restaurants 데이터가 주어지면', () => {
    it('"전체"가 포함된 Restaurants 데이터의 Category들로 구성된 배열을 반환한다.', () => {
      expect(getAllCategories(restaurants)).toEqual(categories);
    });
  });

  context('Restaurants 데이터가 null,undefined 이면', () => {
    it('"전체"만 포함된 Category 배열을 반환한다.', () => {
      expect(getAllCategories(null)).toEqual(['전체']);
      expect(getAllCategories(undefined)).toEqual(['전체']);
    });
  });

  context('Restaurants 데이터가 빈 배열([]) 이면', () => {
    it('"전체"만 포함된 Category 배열을 반환한다.', () => {
      expect(getAllCategories([])).toEqual(['전체']);
    });
  });

  context('Restaurants 데이터 중 중복 카테고리가 존재하면', () => {
    it('유일한 카테고리 값만 반환한다.', () => {
      const rstWithDpCategory:Restaurant[] = [
        ...restaurants,
        {
          id: 'RESTAURANT_04',
          category: '한식',
          name: '메리김밥',
          menu: [
            {
              id: 'FOOD_03',
              name: '김밥',
              price: 3_000,
            },
          ],
        }];
      expect(getAllCategories(rstWithDpCategory)).toEqual(categories);
    });
  });
});
