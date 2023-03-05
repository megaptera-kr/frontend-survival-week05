import selectCategories from './selectCategories';

import fixtures from '../fixtures';

import Restaurant from '../types/Restaurant';

describe('selectCategories 함수', () => {
  it('주어진 레스토랑 목록에서 카테고리를 고르는 기능이 제대로 작동하는가', () => {
    const result = selectCategories(fixtures.restaurants);

    expect(result).toContain('한식');
    expect(result).toContain('일식');
    expect(result).toContain('중식');
    expect(result).not.toContain('양식');
  });

  it('빈 배열이 주어졌을 때 빈 배열을 반환하는가', () => {
    const result = selectCategories([]);

    expect(result).toEqual([]);
  });

  it('중복되는 카테고리가 있을 경우 하나의 카테고리만 반환하는가', () => {
    const testRestaurant:Restaurant = {
      id: '4',
      category: '중식',
      name: '테스트음식점',
      menu: [
        { id: '1', name: '밥', price: 8000 },
        { id: '2', name: '국', price: 8000 },
      ],
    };

    const result = selectCategories([...fixtures.restaurants, testRestaurant]);

    expect(result).toHaveLength(3);
    expect(result).toContain('한식');
    expect(result).toContain('일식');
    expect(result).toContain('중식');
  });
});
