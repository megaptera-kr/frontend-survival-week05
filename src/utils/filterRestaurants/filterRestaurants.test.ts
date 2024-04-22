import filterRestaurants from '.';
import fixtures from '../../../fixtures';
import Category from '../../types/Category';

const context = describe;

describe('filterRestaurants 함수', () => {
  const { restaurants, foods } = fixtures;
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
      const restaurantsWithText = [{
        id: 'RESTAURANT_01',
        category: '중식',
        name: '메가반점',
        menu: [...foods],
      },
      {
        id: 'RESTAURANT_02',
        category: '한식',
        name: '메리김밥',
        menu: [
          {
            id: 'FOOD_03',
            name: '김밥',
            price: 3_000,
          },
        ],
      }];
      expect(filterRestaurants(
        restaurants,
        { text, category },
      )).toEqual(restaurantsWithText);
    });
  });

  context('category가 "일식"이면', () => {
    it('category가 "일식"인 Restaurants를 반환한다.', () => {
      text = '';
      category = '일식';
      const jpRestaurants = [{
        id: 'RESTAURANT_03',
        category: '일식',
        name: '혹등고래카레',
        menu: [
          {
            id: 'FOOD_04',
            name: '카레',
            price: 10_000,
          },
        ],
      },
      ];
      expect(filterRestaurants(
        restaurants,
        { text, category },
      )).toEqual(jpRestaurants);
    });
  });

  context('category가 "중식"이고 text가 "메"라면', () => {
    it('category가 "중식"이고 식당 이름에 "메"가 포함된 Restaurants를 반환한다.', () => {
      text = '메';
      category = '중식';
      const chRestaurantWithText = [{
        id: 'RESTAURANT_01',
        category: '중식',
        name: '메가반점',
        menu: [...foods],
      }];
      expect(filterRestaurants(restaurants, { text, category }))
        .toEqual(chRestaurantWithText);
    });
  });
});
