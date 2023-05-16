import { cleanup } from '@testing-library/react';
import useFetchRestaurants from '../../hooks/__mocks__/useFetchRestaurants';
import filterRestaurants from './filterRestaurants';

const context = describe;

describe('filterRestaurants ', () => {
  const restaurant = useFetchRestaurants();

  afterEach(() => {
    cleanup();
  });

  context('filter only TextField', () => {
    it('test by none data', () => {
      const queryRestaurants = filterRestaurants(restaurant, {
        filterCategory: '전체',
        filterText: ' ',
      });
      expect(queryRestaurants.length).toBe(queryRestaurants.length);
    });
    it('test by none filter data', () => {
      const queryRestaurants = filterRestaurants(restaurant, {
        filterCategory: '전체',
        filterText: '아',
      });
      expect(queryRestaurants.length).toBe(0);
    });
    it('test by 메가반점', () => {
      const queryRestaurants = filterRestaurants(restaurant, {
        filterCategory: '전체',
        filterText: '메가반점',
      });
      expect(queryRestaurants.length).toBe(1);
      expect(queryRestaurants[0].name).toBe('메가반점');
    });
  });
  context('filter only Category', () => {
    it('test by 중식', () => {
      const queryRestaurants = filterRestaurants(restaurant, {
        filterCategory: '중식',
        filterText: '',
      });
      expect(queryRestaurants.length).toBe(1);
    });
    it('test by 한식', () => {
      const queryRestaurants = filterRestaurants(restaurant, {
        filterCategory: '한식',
        filterText: '',
      });
      expect(queryRestaurants.length).toBe(1);
    });
    it('test by 전체', () => {
      const queryRestaurants = filterRestaurants(restaurant, {
        filterCategory: '전체',
        filterText: '',
      });
      expect(queryRestaurants.length).toBe(restaurant.length);
    });
  });
});
