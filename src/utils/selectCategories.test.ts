import fixtures from '../../fixtures';

import selectCategories from './selectCategories';

describe('selectCategories', () => {
  it('배열 안에 카테고리가 모두 존재한다.', () => {
    const categories = selectCategories(fixtures.restaurants);

    expect(categories).toEqual(['중식', '한식', '일식']);
  });
});
