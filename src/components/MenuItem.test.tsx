import { render, screen } from '@testing-library/react';

import MenuItem from './MenuItem';

import fixtures from '../fixtures';

describe('MenuItem', () => {
  function renderMenuItem() {
    render(<MenuItem
      food={fixtures.menus[0]}
    />);
  }
  const text = '짜장면(8,000원)';
  it('shows name and price of menu', () => {
    renderMenuItem();
    screen.getByText(text);
  });
});
