import { fireEvent, render, screen } from '@testing-library/react';

import Cart from './Cart';

import fixtures from '../../fixtures';

const mockFn = jest.fn();
jest.mock('../hooks/useSelectedMenu', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    selectedMenuItems: fixtures.foods,
    handleRemoveMenu: mockFn,
  })),
}));

describe('Cart 컴포넌트 테스트', () => {
  it('장바구니에 메뉴가 있는 경우', () => {
    render(<Cart />);
    screen.getByText(/짜장면/);
    screen.getByText(/짬뽕/);
    const cancelButton = screen.getAllByText('취소')[0];
    fireEvent.click(cancelButton);
    expect(mockFn).toHaveBeenCalled();
  });
});
