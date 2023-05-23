import fixtures from '../../fixtures';

import extractCategories from './extractCategories';

describe('extract Categories', () => {
  it('return category array', () => {
    const categories = extractCategories(fixtures.restaurants);

    expect(categories).toHaveLength(4);
    expect(categories).toEqual(['전체', '중식', '한식', '일식']);
  });
});
