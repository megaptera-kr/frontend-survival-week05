import { render } from '@testing-library/react';

import fixtures from '../fixtures';
import Menu from './Menu';

describe('Menu', () => {
  it('renders without a crash', () => {
    render(<Menu menu={fixtures.restaurants[0].menu} />);
  });
});
