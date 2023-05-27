import fixture from '../../fixture';
import filterRestaurants from './filterRestaurants';

const context = describe;

describe('filterRestaurants', () => {
  context('when a Category is "전체"', () => {
    it('return a All restaurants', () => {
      const filterCategory = '전체';
      const filterText = '';
      const { restaurants } = fixture;
      const filteredRestaurants = filterRestaurants(restaurants, filterText, filterCategory);
      expect(filteredRestaurants).toEqual(restaurants);
    });
  });
  context('when a Category is "일식"', () => {
    it('return a All restaurants', () => {
      const filterCategory = '일식';
      const filterText = '';
      const { restaurants } = fixture;
      const answer = restaurants.filter((restaurant) => (restaurant.category === '일식'));
      const filteredRestaurants = filterRestaurants(restaurants, filterText, filterCategory);
      expect(filteredRestaurants).toEqual(answer);
    });
  });
  context('when a Category is "한식"', () => {
    it('return a All restaurants', () => {
      const filterCategory = '한식';
      const filterText = '';
      const { restaurants } = fixture;
      const answer = restaurants.filter((restaurant) => (restaurant.category === '한식'));
      const filteredRestaurants = filterRestaurants(restaurants, filterText, filterCategory);
      expect(filteredRestaurants).toEqual(answer);
    });
  });
  context('when a inputText is "메가"', () => {
    it('return a All restaurants', () => {
      const filterCategory = '전체';
      const filterText = '메가';
      const { restaurants } = fixture;
      const answer = restaurants.filter((restaurant) => ((restaurant.name).includes('메가')));
      const filteredRestaurants = filterRestaurants(restaurants, filterText, filterCategory);
      expect(filteredRestaurants).toEqual(answer);
    });
  });
});
