import selectCategories from './selectCategories';

import fixtures from '../fixtures';

const { restaurants } = fixtures;

test('selectCategories', () => {
  expect(selectCategories(restaurants)).toStrictEqual(['일식', '중식']);
});
