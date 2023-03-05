import selectCategories from './selectCategories';

import fixtures from '../fixtures';

describe('selectCategory', () => {
  it('calls with no error', () => {
    const result = selectCategories(fixtures.restaurants);
    expect(result.length).toBe(3);
  });
});
