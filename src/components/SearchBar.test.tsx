import { fireEvent, render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const categories = ['Korean', 'Japanese'];
  const filterText = 'Ko';
  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  it('calls the click handler when user clicks button', () => {
    render(
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />,
    );

    fireEvent.click(screen.getByText('Korean'));
    expect(setFilterCategory).toBeCalled();
  });
});
