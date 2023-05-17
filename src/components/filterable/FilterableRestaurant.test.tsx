import { render, screen } from '@testing-library/react';
import SearchField from './SearchField';
import FilterableCategory from './FilterableCategory';

describe('FilterableRestaurant ', () => {
  const filterCategories = ['전체'];
  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  const renderFilterableRestaurant = () => render(
    <div>
      <SearchField
        setFilterText={setFilterText}
      />
      <FilterableCategory
        filterCategories={filterCategories}
        setFilterCategory={setFilterCategory}
      />
    </div>,
  );

  it('component ui check', () => {
    renderFilterableRestaurant();

    expect(screen.getByLabelText(/검색/)).toBeInTheDocument();
    expect(screen.getByText(/전체/)).toBeInTheDocument();
  });
});
