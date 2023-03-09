import fixtures from '../../fixtures';
import selectCategories from './selectCategories';

describe('selectCategories', () => {
  const { restaurants } = fixtures;

  it('returns an array of unique category names', () => {
    const expected = ['중식', '한식', '일식'];
    const result = selectCategories(restaurants);

    expect(result).toEqual(expected);
  });
});
