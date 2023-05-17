import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';

import RestaurantsTableBodyMenu from './RestaurantsTableBodyMenu';

import useFetchFoods from '../../hooks/__mocks__/useFetchFoods';

describe('RestaurantsTableBody ', () => {
  const menu = useFetchFoods();
  const handleClick = jest.fn();
  const renderRestaurantsTableBodyMenu = () => render(
    <RestaurantsTableBodyMenu
      menu={menu}
    />,
  );

  it('renders restaurants body memo', () => {
    renderRestaurantsTableBodyMenu();

    expect(screen.getByText(/짜장면/)).toBeInTheDocument();
    expect(screen.getByText(/짬뽕/)).toBeInTheDocument();
  });

  it('receipt add button test', async () => {
    renderRestaurantsTableBodyMenu();

    await waitFor(() => {
      const button = screen.getByTestId('짜장면');
      fireEvent.click(button, handleClick());
      expect(handleClick).toBeCalledTimes(1);
    });
  });
});
