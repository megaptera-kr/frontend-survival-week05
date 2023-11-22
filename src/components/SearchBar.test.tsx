import { render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar ', () => {
  const categories = ['중식', '한식', '일식'];
  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  function renderSearchBar() {
    render((
      <SearchBar
        filterText=""
        categories={categories}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
    ));
  }
  it('renders TextField', async () => {
    renderSearchBar();
    screen.getByLabelText(/검색/);
  });

  it('render Categories', () => {
    renderSearchBar();

    screen.getByText(/전체/);

    categories.forEach((category) => {
      screen.getByText(category);
    });
  });
});
