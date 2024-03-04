// selectCategories함수는 레스토랑 date 배열의 인자를 받아,
// 카테고리들만 선택해서 배열하는 함수

import restaurants from '../../fixtures/restaurants';
import selectCategories from './selectCategories';

describe('selectCategories 함수', () => {
  it('인자로 빈배열이 주어졌을 때 빈 배열을 반환해야 함', () => {
    const result = selectCategories([]);
    expect(result).toEqual([]);
  });

  it('인자로 받은 배열 목록에서 고유한 카테고리를 선택하여 배열로 반환해야 함', () => {
    const result = selectCategories(restaurants);
    expect(result).toEqual(['중식', '한식', '일식']);
  });

  it('이미 선택된 카테로기를 무시하고 고유한 카테고리만 반환해야 함', () => {
    // eslint-disable-next-line no-shadow
    const restaurants = [
      {
        id: 'RESTAURANT_01',
        category: '중식',
        name: '메가반점',
        menu: [
          {
            id: 'FOOD_01',
            name: '짜장면',
            price: 8_000,
          },
        ],
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
      },
      {
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
      {
        id: 'RESTAURANT_04',
        category: '일식',
        name: '고래카레',
        menu: [
          {
            id: 'FOOD_05',
            name: '손카레',
            price: 10_000,
          },
        ],
      },
    ];

    const result = selectCategories(restaurants);
    expect(result).toEqual(['중식', '한식', '일식']);
  });
});
