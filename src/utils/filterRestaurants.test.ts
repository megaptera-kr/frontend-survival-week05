import fixtures from '../../fixtures';
import filterRestaurants from './filterRestaurants';

const context = describe;

describe('filterRestaurants function', () => {
  let filterText = '';
  let selectCategory = '전체';
  context('undefined가 전달되었을 때', () => {
    it('빈 배열이 리턴된다.', () => {
      expect(
        filterRestaurants(undefined, { filterText, selectCategory }),
      ).toEqual([]);
    });
  });
  context('레스토랑 타입의 배열과 filterText === "", selectCategory === "전체"를 전달했을 때', () => {
    it('전달한 레스토랑 타입의 배열이 그대로 리턴된다 ', () => {
      expect(
        filterRestaurants(fixtures.restaurants, { filterText, selectCategory }),
      )
        .toEqual(fixtures.restaurants);
    });
  });

  context('레스토랑 타입의 배열과 filterText === "메가", selectCategory === "전체"를 전달했을 때', () => {
    it('메가반점 레스토랑 객체가 담겨진 배열이 리턴된다 ', () => {
      filterText = '메가';
      expect(
        filterRestaurants(fixtures.restaurants, { filterText, selectCategory }),
      )
        .toEqual(fixtures.restaurants.filter((restaurant) => (
          restaurant.name.includes(filterText)
        )));
    });
  });
  context('레스토랑 타입의 배열과 filterText === "", selectCategory === "한식"을 전달했을 때', () => {
    it('메리김밥 레스토랑 객체가 담겨진 배열이 리턴된다 ', () => {
      filterText = '';
      selectCategory = '한식';
      expect(
        filterRestaurants(fixtures.restaurants, { filterText, selectCategory }),
      )
        .toEqual(
          fixtures.restaurants.filter((restaurant) => (
            restaurant.category === selectCategory
          )),
        );
    });
  });
});
