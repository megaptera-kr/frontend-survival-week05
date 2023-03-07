import fixtures from '../../fixtures';
import selectCategories from './selectCategories';

const context = describe;

describe('selectCategories', () => {
  context('with restaurants', () => {
    it('returns categoryList', () => {
      const { restaurants } = fixtures;
      const categoryList = ['중식', '한식', '일식'];
      expect(selectCategories(restaurants)).toStrictEqual(categoryList);
    });
  });
});
