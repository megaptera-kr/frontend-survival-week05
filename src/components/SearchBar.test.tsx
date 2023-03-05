import { render } from '@testing-library/react';

import SearchBar from './SearchBar';

import fixtures from '../fixtures';

import selectCategories from '../utils/selectCategories';

describe('SearchBar', () => {
  const categories = selectCategories(fixtures.restaurants);

  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  it('renders with no errors', () => {
    render(<SearchBar
      categories={categories}
      filterText="메가"
      setFilterText={setFilterText}
      setFilterCategory={setFilterCategory}
    />);
  });
});
