import fixtures from '../../fixtures';
import extractCategories from './extractCategories';

describe('extractCategories', () => {
  const { restaurants } = fixtures;

  const categories = extractCategories(restaurants);

  it('returns categories fromt restaurants', () => {
    expect(categories).toEqual(['중식', '한식', '일식']);
  });
});
