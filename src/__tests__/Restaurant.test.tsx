import {
  render, screen, waitFor,
} from '@testing-library/react';

import Restaurant from '../components/Restaurant';

// jest.mock('../hooks/useFetchRestaurants.ts');

describe('Restaurant', () => {
  it('renders restaurants', async () => {
    render(<Restaurant />);

    await waitFor(() => {
      screen.getByText(/메가반점/);
      screen.getByText(/메리김밥/);
    });
  });
});
