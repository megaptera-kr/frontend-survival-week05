import restaurants from '../fixtures/restaurants';
import extractCategories from '../src/utils/extractCategories';

const context = describe;

describe('extractCategories()', () => {
  context('레스토랑 리스트를 받으면', () => {
    it('카테고리 목록을 중복 없이 추출하여 리턴한다', () => {
      const categories = extractCategories(restaurants);
      expect(categories).toEqual(['중식', '한식', '일식']);
    });
  });
});
