import { render } from '@testing-library/react';

import Menu from './Menu';

import fixtures from '../../fixtures';

describe('Menu', () => {
  it('renders without crash', () => {
    render(<Menu menu={fixtures.restaurants[0].menu} />);
  });
});
