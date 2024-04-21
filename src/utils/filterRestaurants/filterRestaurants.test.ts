import filterRestaurants from '.';
import fixtures from '../../../fixtures';
import Category from '../../types/Category';

const context = describe;

describe('filterRestaurants 함수', () => {
  const { restaurants } = fixtures;
  let text = '';
  let category:Category = '전체';

  context('text는 빈문자열, category는 "전체"라면', () => {
    it('Restaurants를 그대로 반환한다.', () => {
      expect(filterRestaurants(
        restaurants,
        { text, category },
      )).toEqual(restaurants);
    });
  });

  context('text만 주어지면', () => {
    it('text를 포함하는 식당 이름을 가진 Restaurants를 반환한다.', () => {
      text = '메';
      const filteredByText = restaurants.filter(
        (restaurant) => restaurant.name.includes(text),
      );
      expect(filterRestaurants(
        restaurants,
        { text, category },
      )).toEqual(filteredByText);
    });
  });

  context('category가 "일식"이면', () => {
    it('category가 "일식"인 Restaurants를 반환한다.', () => {
      text = '';
      category = '일식';
      const filteredByCategory = restaurants.filter(
        (restaurant) => restaurant.category === category,
      );
      expect(filterRestaurants(
        restaurants,
        { text, category },
      )).toEqual(filteredByCategory);
    });
  });
});
