import restaurants from '../fixtures/restaurants';
import makeCategory from '../src/utils/makeCategory';

const context = describe;

describe('makeCategory()', () => {
  context('레스토랑 리스트를 ', () => {
    it('카테고리 목록을 리턴한다', () => {
      const categories = makeCategory(restaurants);
      expect(categories).toEqual(['중식', '한식', '일식']);
    });
  });
});
