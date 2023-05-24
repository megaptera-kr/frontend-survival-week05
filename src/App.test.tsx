import { render, screen, waitFor } from '@testing-library/react';

import App from './App';

describe('App ', () => {
  it('renders restaurants', () => {
    render(<App />);
    screen.getByText(/식당 이름/);
  });
  it('renders restaurants name', async () => {
    render(<App />);
    await waitFor(() => {
      screen.getByText(/메가/);
    });
  });
});
