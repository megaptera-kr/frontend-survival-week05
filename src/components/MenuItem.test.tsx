import { render, screen } from '@testing-library/react';

import MenuItem from './MenuItem';

import fixtures from '../../fixtures';

describe('MenuItem', () => {
  it('renders without crash', () => {
    render(<MenuItem food={fixtures.restaurants[0].menu[0]} />);
    expect(screen.getByText(/짜장면/)).toBeInTheDocument();
  });
});
