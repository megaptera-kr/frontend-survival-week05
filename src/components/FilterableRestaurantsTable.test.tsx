import { render } from '@testing-library/react';

import FilterableRestaurantsTable from './FilterableRestaurantsTable';

describe('FilterableRestaurantsTable', () => {
  it('restaurantsTable을 렌더링한다', () => {
    const { container } = render(<FilterableRestaurantsTable />);
    const restaurantsTable = container.querySelector('table');

    expect(restaurantsTable).toBeInTheDocument();
  });
});
