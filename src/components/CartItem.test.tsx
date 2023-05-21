import { fireEvent, render, screen } from '@testing-library/react';
import fixtures from '../../fixtures';
import CartItem from './CartItem';

const context = describe;

describe('<CartItem />', () => {
  const menu = fixtures.foods[0];
  const index = 0;
  const handleClickCancel = jest.fn();

  const renderCartItem = () => (
    render(<CartItem
      menu={menu}
      index={index}
      handleClickCancel={handleClickCancel}
    />)
  );

  it('render cart item', () => {
    renderCartItem();

    screen.getByText(new RegExp(menu.name));
    screen.getByRole('button', { name: /취소/ });
  });

  context('click "취소" button', () => {
    it('listens click event', () => {
      renderCartItem();

      const button = screen.getByRole('button', { name: /취소/ });
      fireEvent.click(button);
      expect(handleClickCancel).toBeCalledWith(index);
    });
  });
});
