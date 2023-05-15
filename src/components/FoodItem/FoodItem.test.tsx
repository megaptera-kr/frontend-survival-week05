import { render, screen } from '@testing-library/react';

import FoodItem from './FoodItem';

describe('FoodItem', () => {
  const food = {
    id: 'FOOD_ID',
    name: '짜장면',
    price: 8_000,
  };

  it('renders food information', () => {
    render(<FoodItem food={food} />);

    screen.getByText('짜장면(8,000원)');
  });

  it('renders children', () => {
    render((
      <FoodItem food={food}>
        <p>냠냠!</p>
      </FoodItem>
    ));

    screen.getByText(/냠냠!/);
  });
});
