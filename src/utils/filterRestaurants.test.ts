import filterRestaurants from './filterRestaurants';
import restaurants from '../../fixtures/restaurants';

describe('filterRestaurants 함수', () => {
  it('인자로 입력 받은 배열에서 filterText를 포함하고 있지 않다면 빈 배열 반환', () => {
    const filterText = '메가테라라라';
    const filterCategory = '전체';
    const result = filterRestaurants(restaurants, { filterText, filterCategory });
    expect(result).toEqual([]);
  });

  it('filterText가 공백을 포함하고 있다면 공백을 제외하고 filterText 포함하고 있는 배열 반환', () => {
    const filterText = '  메가';
    const filterCategory = '전체';
    const result = filterRestaurants(restaurants, { filterText, filterCategory });
    expect(result).toEqual([restaurants[0]]);
  });

  it('filterCategory가 전체 라면 입력받은 배열 그대로 반환', () => {
    const filterText = '';
    const filterCategory = '전체';
    const result = filterRestaurants(restaurants, { filterText, filterCategory });
    expect(result).toEqual(restaurants);
  });

  it('filterCategory가 한식 이면 한식이 포함되어 있는 배열 반환', () => {
    const filterText = '';
    const filterCategory = '한식';
    const result = filterRestaurants(restaurants, { filterText, filterCategory });
    expect(result).toEqual([{
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
    }]);
  });
});
