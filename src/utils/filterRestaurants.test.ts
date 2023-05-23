import fixtures from '../../fixtures';

import filterRestaurants from './filterRestaurants';

const context = describe;

describe('filterRestaurants', () => {
  context('input "전체" category', () => {
    it('return all restaurants', () => {
      const filteredRestaurants = filterRestaurants(
        fixtures.restaurants,
        '',
        '전체',
      );

      expect(filteredRestaurants).toHaveLength(fixtures.restaurants.length);
    });
  });
  context('input "중식" category', () => {
    it('return 1 restaurant', () => {
      const filteredRestaurants = filterRestaurants(
        fixtures.restaurants,
        '',
        '중식',
      );

      expect(filteredRestaurants).toHaveLength(1);
    });
  });

  context('input filter Text "메가반점"', () => {
    it('return matching restaurants', () => {
      const filteredRestaurants = filterRestaurants(
        fixtures.restaurants,
        '메가반점',
        '전체',
      );

      expect(filteredRestaurants).toHaveLength(1);
      expect(filteredRestaurants[0].name).toBe('메가반점');
    });
  });

  context('input filter Text "메가반점" and "중식" category', () => {
    it('return matching restaurants', () => {
      const filteredRestaurants = filterRestaurants(
        fixtures.restaurants,
        '메가반점',
        '중식',
      );

      expect(filteredRestaurants).toHaveLength(1);
      expect(filteredRestaurants[0].name).toBe('메가반점');
    });
  });
  context('input filter Text "메가반점" and "일식" category', () => {
    it('return matching restaurants', () => {
      const filteredRestaurants = filterRestaurants(
        fixtures.restaurants,
        '메가반점',
        '일식',
      );

      expect(filteredRestaurants).toHaveLength(0);
    });
  });
});
