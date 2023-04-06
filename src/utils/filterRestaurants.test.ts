import filterRestaurants from './filterRestaurants';
import Restaurant from '../types/Restaurant';
import fixtures from '../fixtures';

const context = describe;

describe('filterRestaurants function', () => {
  function callfilterRestaurants(
    restaurants:Restaurant[],
    filterText:string,
    filterCategory:string,
  ) {
    return filterRestaurants(restaurants, {
      filterText, filterCategory,
    });
  }

  context('calls with no error', () => {
    const result = callfilterRestaurants(fixtures.restaurants, '', '전체');
    it('returns filtered all restaurants list', () => {
      expect(result.length).toBe(3);
    });
  });

  context('when it is called with filterText and filterCateogry', () => {
    const result = callfilterRestaurants(fixtures.restaurants, '메가', '중식');
    it('returns filtered restaurants list', () => {
      expect(result[0].menu.length).toBe(4);
    });
  });

  context('when it called with text with blanks', () => {
    const result = callfilterRestaurants(fixtures.restaurants, '  메', '전체');
    it('returns filtered restaurants list properly', () => {
      expect(result.length).toBe(2);
    });
  });
});
