import { render, screen } from '@testing-library/react';

import FilterableRestaurantsTable from './FilterableRestaurantsTable';

describe('FilterableRestaurantsTable', () => {
  it('restaurantsTable을 렌더링한다', () => {
    const { container } = render(<FilterableRestaurantsTable />);
    const restaurantsTable = container.querySelector('table');

    expect(restaurantsTable).toBeInTheDocument();
  });

  it('searchBar를 렌더링한다', () => {
    render(<FilterableRestaurantsTable />);
    const searchBar = screen.getByLabelText('검색');

    expect(searchBar).toBeInTheDocument();
  });
});
