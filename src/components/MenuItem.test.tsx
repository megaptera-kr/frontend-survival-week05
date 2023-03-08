import { render, screen } from '@testing-library/react';
import fixtures from '../fixtures';

import MenuItem from './MenuItem';

describe('MenuItem', () => {
  it('renders without crash', () => {
    render(<MenuItem food={fixtures.restaurants[0].menu[0]} />);

    expect(screen.getByText(/짜장면/)).toBeInTheDocument();
  });
});
