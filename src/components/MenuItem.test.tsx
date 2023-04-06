import { render, screen } from '@testing-library/react';
import fixtures from '../../fixtures';
import MenuItem from './MenuItem';

describe('MenuItem', () => {
  const food = fixtures.restaurants[0].menu[0];

  function renderMenuItem() {
    render(
      <MenuItem food={food} />,
    );
  }
  it('render elements', () => {
    renderMenuItem();

    screen.getByText(/짜장면/);
    screen.getByText(/원/);
  });
});
