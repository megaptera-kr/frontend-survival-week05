import {
  renderHook, render, screen, act,
} from '@testing-library/react';
import { useLocalStorage } from 'usehooks-ts';
import Cart from './Cart';
import fixtures from '../../fixtures';
import useCreateOrder from '../hooks/useCreateOrder';

const context = describe;
describe('Cart', () => {
  // given
  const { foods } = fixtures;
  const setFoods = jest.fn();
  const setReceipt = jest.fn();

  // const setLocalStorageFixture = () => {
  //   jest.mock('usehooks-ts', () => ({
  //     useLocalStorage: () => [foods,
  //       setFoods],
  //   }));
  // };

  const renderCart = () => {
    render(
      <Cart setReceipt={setReceipt} />,
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('주문 바구니를 렌더링 한다', () => {
    // when
    renderCart();

    // then
    screen.getByText('주문 바구니');
  });

  context('주문 바구니에 음식이 없는 경우', () => {
    it('CartItem을 렌더링 하지 않는다', () => {
      // when
      renderCart();

      // then
      expect(screen.queryByRole('listitem')).toBeNull();
    });
  });

  // context('주문 바구니에 음식이 있는 경우', () => {
  //   it('CartItem을 렌더링 한다', () => {
  //     // when
  //     renderCart();
  //     setLocalStorageFixture();

  //     // then
  //     screen.getByText(`${foods[0].name}(${foods[0].price.toLocaleString()}원)`);

  //     // const { result } = renderHook(() => useCreateOrder());
  //     // const { result } = renderHook(() => useCreateOrder());
  //     // const { createOrder } = result.current;

  //     // act(() => createOrder(fixtures.foods));

  //     // expect(screen.queryByRole('listitem')).toBeNull();

  //     // expect(item).toBeInTheDocument();
  //   });
  // });
  // TODO: 주문 바구니에 음식이 있는 경우, 취소한 경우 주문을 했을 경우에 대한 테스트 케이스 작성
});
