import fixtures from '../../fixtures';

import filterRestaurants from './filterRestaurants';

import foods from '../../fixtures/foods';

const context = describe;

describe('filterRestaurants', () => {
  context('레스토랑 데이터, filterText == "메가", filterCategory = "중식" 이 들어왔을 때', () => {
    it('이름에 메를 포함하고, 카데고리가 중식인 레스토랑 객체를 포함한 배열을 리턴한다.', () => {
      const filterText = '메';
      const filterCategory = '중식';
      const expectedFilteredRestaurants = [
        {
          id: 'RESTAURANT_01',
          category: '중식',
          name: '메가반점',
          menu: [...foods],
        },
      ];

      const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
        filterText,
        filterCategory,
      });

      expect(filteredRestaurants).toEqual(expectedFilteredRestaurants);
    });
  });
});
