import fixtures from '../fixtures';

import selectCategories from './selectCategories';

describe('selectCategories', () => {
  it('카테고리를 한데 모아보자', () => {
    const categories = selectCategories(fixtures.restaurants);

    expect(categories).toEqual(['중식', '한식', '일식']);
  });
});
