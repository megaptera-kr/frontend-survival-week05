import { render, screen } from '@testing-library/react';

import RestaurantTable from './RestaurantTable';

import fixtures from '../../fixtures';

describe('<RestaurantTable />', () => {
  it('render restaurant table', () => {
    render(<RestaurantTable restaurants={fixtures.restaurants} />);

    screen.getByText(/식당 이름/);
    screen.getByText(/메뉴/);
  });
});
