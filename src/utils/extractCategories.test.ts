import fixture from '../../fixture';
import extractCategories from './extractCategories';

describe('extractCategories', () => {
  it('return a categories', () => {
    const { restaurants } = fixture;
    const categories = extractCategories(restaurants);
    expect(categories).toEqual(['중식', '한식', '일식']);
  });
});
