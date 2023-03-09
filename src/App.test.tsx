import { render, screen, waitFor } from '@testing-library/react';

import App from './App';

// jest.mock('./hooks/useFetchRestaurants', () => () => fixtures.restaurants);

describe('<App />', () => {
  it('renders properly', async () => {
    render(<App />);

    await waitFor(() => screen.getByText(/바구니/));
    await waitFor(() => screen.getByText(/메가반점/));
    await waitFor(() => screen.getByText(/영수증/));
    // screen.getByText('홍콩반점');
    // screen.getByText(/영수증/);
  });

  // TODO: localStorage에서 디폴트값 넣어주면 몇 초 있다가 주문번호란 글자가 안보이는거 테스트.
  // it('removes receipt', () => {
  //   render(<App />);
  //   screen.getByText(/주문번호/);
  // });
});
