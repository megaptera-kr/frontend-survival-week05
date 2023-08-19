import { render, fireEvent, screen } from '@testing-library/react';

import RestaurantTableRow from '../components/MenuList';

import fixtures from '../../fixtures';

const context = describe;

describe('MenuList', () => {
  const { foods } = fixtures;
  const handleClickBtn = jest.fn();

  context('When you click the Select button', () => {
    it('Call the click handler', () => {
      render((<RestaurantTableRow food={foods[0]} onClickBtn={handleClickBtn} />));
      fireEvent.click(screen.getByTestId('#짜장면'));
      expect(handleClickBtn).toBeCalledWith(foods[0]);
    });
  });
});
