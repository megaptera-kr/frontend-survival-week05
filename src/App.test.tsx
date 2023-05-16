import { render, waitFor, screen } from '@testing-library/react';

import App from './App';

describe('App ', () => {
  const renderApp = () => {
    render(<App />);
  };

  it('renders header', () => {
    renderApp();

    expect(screen.getByText(/푸드코트 키오스크/)).toBeInTheDocument();
  });

  it('renders restaurants', async () => {
    renderApp();

    await waitFor(() => {
      expect(screen.getByText(/메가반점/)).toBeInTheDocument();
      expect(screen.getByText(/메리김밥/)).toBeInTheDocument();
    });
  });

  it('renders carts', () => {
    renderApp();

    expect(screen.getByText(/점심 바구니/)).toBeInTheDocument();
  });

  it('renders receipt', () => {
    renderApp();

    expect(screen.getByText(/영수증 나오는 곳/)).toBeInTheDocument();
  });
});
