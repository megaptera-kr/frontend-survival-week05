import filterCategories from './filterCategories';

import restaurants from '../../fixtures/restaurants';

const context = describe;
describe('filterCategories', () => {
  context('전체 카테고리를 전달한다.', () => {
    it('모든 식당을 렌더링 한다.', () => {
      const filteredCategories = filterCategories({ restaurants, category: '전체' });

      expect(filteredCategories.length).toBe(restaurants.length);
    });

    context('중식 카테고리를 전달한다.', () => {
      const filteredCategories = filterCategories({ restaurants, category: '중식' });

      expect(filteredCategories.length).toBe(1);
    });

    context('일식 카테고리를 전달한다.', () => {
      const filteredCategories = filterCategories({ restaurants, category: '일식' });

      expect(filteredCategories.length).toBe(1);
    });
  });
});
