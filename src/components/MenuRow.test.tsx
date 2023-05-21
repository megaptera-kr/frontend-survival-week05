import { render, screen } from '@testing-library/react';

import fixtures from '../../fixtures';

import MenuRow from './MenuRow';

describe('<MenuRow />', () => {
  const food = fixtures.foods[0];

  it('render menu', () => {
    render(<MenuRow food={food} />);

    screen.getByText(/짜장면/);
    screen.getByText(/8,000원/);
    screen.getByRole('button', { name: /선택/ });
  });
});
