import { render, waitFor, screen } from '@testing-library/react';

import App from './App';

describe('App ', () => {
  it('renders restaurants', async () => {
    render(<App />);

    await waitFor(() => {
      const title = screen.getByText(/푸드코트 키오스크/);
      expect(title).toBeInTheDocument();
    });
  });
});
