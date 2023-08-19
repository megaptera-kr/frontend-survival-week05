import { render, fireEvent, screen } from '@testing-library/react';
import fixtures from '../../fixtures';
import CartList from '../components/CartList';

describe('Cart', () => {
  const handleClickCancel = jest.fn();
  const { foods } = fixtures;
  const idx = 0;
  const cartItem = foods[idx];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderCartList = () => {
    render(<CartList item={cartItem} idx={idx} onClickCancel={handleClickCancel} />);
  };

  it('Render cart list', () => {
    renderCartList();
    const li = screen.getByText(/짜장면/);
    expect(li).toBeInTheDocument();
  });

  it('Call the Click handler', () => {
    renderCartList();
    fireEvent.click(screen.getByText('취소'));
    expect(handleClickCancel).toBeCalledWith(idx);
  });
});
