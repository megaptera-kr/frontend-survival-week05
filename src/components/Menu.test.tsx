/* eslint-disable comma-dangle */

import { render, screen } from '@testing-library/react';
import fixtures from '../../fixtures';

import Menu from './Menu';

describe('Menu', () => {
  it('renders without crash', () => {
    render(<Menu menu={fixtures.restaurants[0].menu} />);

    expect(
      screen.getByText(new RegExp(fixtures.restaurants[0].menu[0].name))
    ).toBeInTheDocument();
  });
});
