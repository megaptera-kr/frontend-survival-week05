import filterRestaurants from './filterRestaurants';
import fixtures from '../../fixtures';

describe('filterRestaurants', () => {
  const { restaurants } = fixtures;
  const filterText = '';
  const filterCategory = '전체';

  it('returns all restaurants when filter category is 전체 and filter text is empty', () => {
    const filtered = filterRestaurants(restaurants, {
      filterText,
      filterCategory,
    });
    expect(filtered).toEqual(restaurants);
  });

  it('filters restaurants by category', () => {
    const filtered = filterRestaurants(restaurants, {
      filterText: '',
      filterCategory: '한식',
    });
    expect(filtered).toEqual([restaurants[1]]);
  });

  it('filters restaurants by query text', () => {
    const filtered = filterRestaurants(restaurants, {
      filterText: '메가',
      filterCategory: '전체',
    });
    expect(filtered).toEqual([restaurants[0]]);
  });

  it('filters restaurants by category and query text', () => {
    const filtered = filterRestaurants(restaurants, {
      filterText: '김밥',
      filterCategory: '한식',
    });
    expect(filtered).toEqual([restaurants[1]]);
  });
});
