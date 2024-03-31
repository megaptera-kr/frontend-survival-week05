import selectCategories from '../selectCategories';

import Restaurant from '../../types/Restaurant';

describe('selectCategories function', () => {
  it('레스토랑 배열이 비어있을 때 빈 배열을 반환합니다.', () => {
    const restaurants: Restaurant[] = [];
    const categories = selectCategories(restaurants);
    expect(categories).toEqual([]);
  });

  it('선택한 카테고리를 보여줍니다.', () => {
    const restaurants = [
      {
        id: '1',
        category: '한식',
        name: '메리김밥',
        menu: [
          { id: '5', name: '김밥', price: 3500 },
          { id: '6', name: '참치김밥', price: 4500 },
          { id: '7', name: '제육김밥', price: 5000 },
          { id: '8', name: '훈제오리김밥', price: 5500 },
        ],
      },
      {
        id: '2',
        category: '중식',
        name: '메가반점',
        menu: [
          { id: '1', name: '짜장면', price: 8000 },
          { id: '2', name: '짬뽕', price: 8000 },
          { id: '3', name: '차돌짬뽕', price: 9000 },
          { id: '4', name: '탕수육', price: 14000 },
        ],
      },
      {
        id: '3',
        category: '일식',
        name: '혹등고래카레',
        menu: [
          { id: '9', name: '기본카레', price: 9000 },
          { id: '10', name: '가라아게카레', price: 14000 },
          { id: '11', name: '소시지카레', price: 13000 },
          { id: '12', name: '돈까스카레', price: 14000 },
          { id: '13', name: '닭가슴살카레', price: 13000 },
        ],
      },
    ];
    const categories = selectCategories(restaurants);
    expect(categories).toEqual(['한식', '중식', '일식']);
  });

  it('같은 카테고리르 가진 식당들이 있다면 같이 보여줍니다.', () => {
    const restaurants = [
      {
        id: '1',
        category: '한식',
        name: '메가김밥',
        menu: [],
      },
      {
        id: '2',
        category: '한식',
        name: '메가메가김밥',
        menu: [],
      },
    ];
    const categories = selectCategories(restaurants);
    expect(categories).toEqual(['한식']);
  });
});
