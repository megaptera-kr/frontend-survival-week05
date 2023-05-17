import {
  fireEvent, render, screen,
} from '@testing-library/react';
import CartListFood from './CartListFood';
import Food from '../../types/food';
import useFetchFoods from '../../../hooks/__mocks__/useFetchFoods';

const context = describe;

describe('CartListFood ', () => {
  const handleRemoveCartClick = jest.fn();
  function renderCartListFood(selectFood: Food[]) {
    return render(
      <CartListFood
        selectFood={selectFood}
        handleRemoveCartClick={handleRemoveCartClick}
      />,
    );
  }

  context('food data check', () => {
    it('render food has no data', () => {
      const selectFood = [] as Food[];
      renderCartListFood(selectFood);

      expect(screen.getByText(/장바구니가 비어있습니다/)).toBeInTheDocument();
    });
    it('render has some food data', () => {
      const selectFood = useFetchFoods();
      renderCartListFood(selectFood);

      expect(screen.getByText(/짜장면/)).toBeInTheDocument();
    });
  });

  it('click remove button check', () => {
    const selectFood = useFetchFoods();
    renderCartListFood(selectFood);

    const button = screen.getAllByRole('button')[0];
    fireEvent.click(button, handleRemoveCartClick());
    expect(handleRemoveCartClick).toBeCalledWith(0);
  });
});
