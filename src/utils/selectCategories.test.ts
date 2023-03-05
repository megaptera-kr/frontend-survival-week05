import fixtures from '../fixtures';
import selectCategories from './selectCategories';

describe('selectCategories', () => {
  it('select categories in restaurants except duplication', () => {
    const categories = selectCategories(fixtures.restaurants);

    expect(categories).toEqual(['중식', '한식', '일식']);
  });
});
