import { render, screen } from '@testing-library/react';

import FilterableRestaurantTable from './FilterableRestaurantTable';

describe('<FilterableRestaurantTable />', () => {
  it('renders search bar', () => {
    render(<FilterableRestaurantTable />);
    screen.getByLabelText(/검색/);
  });

  it('render filter buttons', () => {
    render(<FilterableRestaurantTable />);

    screen.getByRole('button', { name: '전체' });
  });

  it('renders restaurant table', () => {
    render(<FilterableRestaurantTable />);

    screen.getByText(/식당 이름/);
    screen.getByText(/메뉴/);
  });
});
