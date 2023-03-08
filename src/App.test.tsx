import { render, screen, waitFor } from '@testing-library/react';

import App from './App';

describe('App ', () => {
  it('renders without crash', async () => {
    render(<App />);

    await waitFor(() => {
      screen.getAllByText(/짜장면/);
    });
  });
});
