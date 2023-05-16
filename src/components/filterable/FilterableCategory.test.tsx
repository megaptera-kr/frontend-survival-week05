import FilterableCategory from './FilterableCategory';

import {
  fireEvent,
  render, screen, waitFor,
} from '../../../hooks/tests/restaurantContextRender';

import filterCategories from '../../utils/filterCategories';

import useFetchRestaurants from '../../../hooks/__mocks__/useFetchRestaurants';

const context = describe;

describe('FilterableCategory ', () => {
  const filteredCategories: string[] = filterCategories(useFetchRestaurants());
  const setFilterCategory = jest.fn();
  const renderFilterableCategory = () => render(
    <FilterableCategory
      filterCategories={filteredCategories}
      setFilterCategory={setFilterCategory}
    />,
  );

  it('component ui check', async () => {
    renderFilterableCategory();

    expect(screen.getByText(/전체/)).toBeInTheDocument();
    expect(screen.getByText(/중식/)).toBeInTheDocument();
    expect(screen.getByText(/한식/)).toBeInTheDocument();
    expect(screen.getByText(/일식/)).toBeInTheDocument();
  });
});
