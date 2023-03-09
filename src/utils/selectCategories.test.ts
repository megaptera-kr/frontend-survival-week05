import fixtures from '../fixtures';
import selectCategories from './selectCategories';

const context = describe;

describe('selectCategories', () => {
  const { restaurants } = fixtures;

  context('with empty array', () => {
    it('returns empty array', () => {
      expect(selectCategories([])).toEqual([]);
    });
  });

  // FIXME: 중복을 없앤다를 증명하고 싶은데, 어떤 식으로 테스트해야 좋을지 모르겠음.
  context('with repeatedCategoriesArray', () => {
    it('return short length than repeatedCategoriesArray', () => {
      const repeatedArray = [...restaurants, ...restaurants];

      expect(selectCategories(repeatedArray).length).toBeLessThan(
        repeatedArray.length,
      );
    });
  });
});
