import { render, screen } from '@testing-library/react';
import fixtures from '../fixtures';
import Food from '../types/Food';
import Cart from './Cart';

const sampleReceipt = {
  id: '486',
  menu: fixtures.restaurants[0].menu,
  totalPrice: 45000,
};

jest.mock('usehooks-ts', () => ({
  useLocalStorage: (key = 'cart') => [
    localStorage.getItem(key) || fixtures.restaurants[0].menu.slice(0, 2),
    (value: Food[]) => localStorage.setItem(key, JSON.stringify(value)),
  ],
}));

jest.mock('../hooks/useCreateOrder', () => () => ({
  createOrder: () => sampleReceipt,
}));

describe('<Cart />', () => {
  const setup = () => {
    const setReceipt = jest.fn();
    render(<Cart setReceipt={setReceipt} />);

    return { setReceipt };
  };

  it('renders selectFood from localStorage', () => {
    setup();

    screen.getByText(/까르보나라/);
    screen.getByText(/고르곤졸라/);
  });

  // it('remove selectFood in localStorage', () => {
  //   jest.spyOn(Storage.prototype, 'setItem');

  //   setup();

  //   fireEvent.click(screen.getAllByRole('button', { name: '취소' })[0]);

  //   expect(localStorage.setItem).toBeCalledWith(
  //     'cart',
  //     JSON.stringify([fixtures.restaurants[0].menu[1]]),
  //   );
  //   // TODO: 아래처럼 텍스트가 아예 안보이는 걸 하고싶었는데, 잘 안됨.
  //   // expect(screen.getByText(/까르보나라/)).toBeFalsy();
  // });

  // it('creates order', () => {
  //   const { setReceipt } = setup();

  //   fireEvent.click(screen.getByText(/주문/));

  //   // 위에랑 같은문제 해결해야함.
  //   // expect(screen.getByText('취소')).not.toBeInTheDocument();
  //   // expect(setReceipt).toBeCalledWith(sampleReceipt);
  // });
});
