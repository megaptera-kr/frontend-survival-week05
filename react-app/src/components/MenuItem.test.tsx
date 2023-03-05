import { render, screen } from '@testing-library/react';
import MenuItem from './MenuItem';

test('MenuItem', () => {
  // given
  const food = {
    id: '1',
    name: '딸기',
    price: 123,
  };
  // when
  render((
    <MenuItem
      food={food}
    />
  ));

  // then
  screen.getByText(/딸기/);
});
