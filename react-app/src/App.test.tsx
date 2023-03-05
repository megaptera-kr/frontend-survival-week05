import { render, screen, waitFor } from '@testing-library/react';

import App from './App';

const context = describe;

describe('App ', () => {
  function renderApp() {
    render(<App />);
  }
  it('renders without crash', () => {
    renderApp();

    screen.getByText('푸드코트 키오스크');
  });

  context('when it calls useFetchRestaurants', () => {
    it('can get retaurants data', () => {
      renderApp();
      waitFor(() => {
        screen.getByText('메가반점');
      });
    });
  });
});
