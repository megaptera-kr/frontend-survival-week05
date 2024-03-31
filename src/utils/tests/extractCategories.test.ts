import extractCategories from '../extractCategories';

import Restaurant from '../../types/Restaurant';

describe('extractCategories function', () => {
  it('아무 선택을 하지 않았다면 빈 배열 리턴', () => {
    const restaurants: Restaurant[] = [];
    const categories = extractCategories(restaurants);
    expect(categories).toEqual([]);
  });

  it('카테고리를 선택했다면 해당 식당 보여주기', () => {
    const restaurants = [
      {
        id: '1',
        category: '한식',
        name: '메가김밥',
        menu: [],
      },
      {
        id: '2',
        category: '중식',
        name: '메가반점',
        menu: [],
      },
      {
        id: '3',
        category: '일식',
        name: '흑동고래카페',
        menu: [],
      },
    ];
    const categories = extractCategories(restaurants);
    expect(categories).toEqual(['한식', '중식', '일식']);
  });
});
