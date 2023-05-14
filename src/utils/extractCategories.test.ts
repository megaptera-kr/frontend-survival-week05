import fixtures from '../../fixtures';

import extractCategories from './extractCategories';

const context = describe;

describe('extractCategories', () => {
  context('레스토랑 데이터를 전달했을 때', () => {
    it('카테고리를 추출해서 리턴한다.', () => {
      expect(extractCategories(fixtures.restaurants)).toEqual(['중식', '한식', '일식']);
    });
  });
});
