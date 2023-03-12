import { render, screen } from '@testing-library/react';

import RestaurantTable from './RestaurantTable';

import fixtures from '../fixtures';

describe('RestaurantTable', () => {
  it('레스토랑 리스트를 보여준다.', () => {
    render(<RestaurantTable restaurants={fixtures.restaurants} />);

    expect(screen.getByText('메가반점')).toBeInTheDocument();
    expect(screen.getByText('메리김밥')).toBeInTheDocument();
    expect(screen.getByText('혹등고래카레')).toBeInTheDocument();
  });
});
