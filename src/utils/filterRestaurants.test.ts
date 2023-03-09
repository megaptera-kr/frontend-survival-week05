import fixtures from '../fixtures';
import filterRestaurants from './filterRestaurants';

const context = describe;
describe('filterRestaurants', () => {
  const defaultFilterConditions = {
    filterText: '',
    filterCategory: '전체',
  };

  context('with empty restaurants', () => {
    it('returns empty array', () => {
      expect(filterRestaurants([], defaultFilterConditions)).toEqual([]);
    });
  });

  context('with defaultFilterConditions', () => {
    it('returns restaurants originally', () => {
      expect(
        filterRestaurants(fixtures.restaurants, defaultFilterConditions),
      ).toEqual(fixtures.restaurants);
    });
  });

  context('depends on filterConditions', () => {
    it('returns restaurants with corresponding filterCategory', () => {
      expect(
        filterRestaurants(fixtures.restaurants, {
          ...defaultFilterConditions,
          filterCategory: '중식',
        })[0].category,
      ).toContain('중식');
      // FIXME: expect안이 너무 김
      // 필터링을 증명하려면 첫번째가 일치함을 말고
      // 리스트에 없음을 증명하는게 더 좋은 증명일 것 같음
      expect(
        filterRestaurants(fixtures.restaurants, {
          ...defaultFilterConditions,
          filterCategory: '일식',
        })[0].category,
      ).toBe('일식');
    });

    it('returns restaurants with corresponding filterText', () => {
      expect(
        filterRestaurants(fixtures.restaurants, {
          ...defaultFilterConditions,
          filterText: '메가',
        })[0].name,
      ).toBe('메가반점');
    });
  });
});
