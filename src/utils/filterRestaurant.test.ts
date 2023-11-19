import restaurants from '../../fixtures/restaurants';
import filterRestaurant from './filterRestaurant';

const context = describe;

describe('filter restaurant data', () => {
  context('with category option', () => {
    it('returns filter category', () => {
      expect(filterRestaurant(restaurants, { query: '', category: '중식' }).map((item) => item.category)).not.toContain('일식');
    });
  });

  context('with query option', () => {
    it('returns filter query', () => {
      expect(filterRestaurant(restaurants, { query: '메리', category: '전체' }).map((item) => item.category)).toContain('한식');
    });
  });
});
