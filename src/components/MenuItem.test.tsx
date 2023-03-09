import { render, screen } from '@testing-library/react';

import MenuItem from './MenuItem';

import fixtures from '../fixtures';

describe('<MenuItem />', () => {
  const sampleFood = fixtures.restaurants[0].menu[0];

  const setup = (props = {}) => {
    const food = sampleFood;
    const initialProps = { food };

    render(<MenuItem {...initialProps} {...props} />);
  };

  it('has span with name and price', () => {
    setup();

    screen.getByText(/짜장면/);
    screen.getByText(/8,000/);
  });

  it('renders children properly', () => {
    const children = <button type="button">팔기</button>;
    setup({ children });

    screen.getByText('팔기');
  });
});
