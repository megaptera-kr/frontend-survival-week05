import { render, screen } from '@testing-library/react';
import MenuItem from './MenuItem';

describe('MenuItem', () => {
  const food = {
    id: 'FOOD_01',
    name: '짜장면',
    price: 8_000,
  };

  it('renders MenuItem', () => {
    render((
      <MenuItem
        food={food}
      />
    ));

    screen.getByText('짜장면(8,000원)');
  });
});
