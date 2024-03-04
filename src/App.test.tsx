import { render, waitFor, screen } from '@testing-library/react';

import App from './App';

describe('App ', () => {
  // jest.mock('./hooks/useFetchRestaurant', () => () => fixtures.restaurants);

  it('renders restaurants', async () => {
    render(<App />);

    await waitFor(() => {
      screen.getByText(/메가반점/);
      screen.getByText(/메리김밥/);
    });
  });
});
