import { fireEvent, render, screen } from '@testing-library/react';

import MenuItem from './MenuItem';
import Button from './Button';

describe('MenuItem', () => {
  const food = {
    id: 'FOOD_ID',
    name: '짜장면',
    price: 8000,
  };
  const handleClickSelect = jest.fn();

  function renderMenuItem() {
    render(
      <MenuItem
        food={food}
      >
        <Button
          type="button"
          title="선택"
          buttonStyle={{ marginLeft: '.5rem' }}
          name={`#${food.name}`}
          onClick={() => handleClickSelect(food)}
        />
      </MenuItem>,
    );
  }

  it('renders food information', () => {
    render(<MenuItem food={food} />);
    screen.getByText('짜장면(8,000원)');
  });

  it('renders children component', () => {
    renderMenuItem();

    screen.getByText('선택');
  });

  it('listens for select button click event', () => {
    renderMenuItem();
    fireEvent.click(screen.getByText('선택'));

    expect(handleClickSelect).toBeCalledWith(food);
  });
});
