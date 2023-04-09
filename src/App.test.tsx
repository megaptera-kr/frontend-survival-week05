import { render, waitFor, screen } from '@testing-library/react';

import App from './App';

describe('App ', () => {
  it('renders restaurants', async () => {
    render(<App />);

    await waitFor(() => {
      screen.getByText('가게이름');
      // screen.getByText(/가게/);
      // screen.getByText(/메리김밥/);
    });
  });
});
