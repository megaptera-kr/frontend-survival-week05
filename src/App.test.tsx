import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

// jest.mock('./hooks/useFetchRestaurants', () => () => fixtures.restaurants);

describe('<App />', () => {
  it('renders properly', async () => {
    render(<App />);

    await waitFor(() => screen.getByText(/바구니/));
    await waitFor(() => screen.getByText(/홍콩반점/));
    await waitFor(() => screen.getByText(/영수증/));
    // screen.getByText('홍콩반점');
    // screen.getByText(/영수증/);
  });

  it('removes receipt', () => {
    render(<App />);
    screen.getByText(/주문번호/);
  });
});
