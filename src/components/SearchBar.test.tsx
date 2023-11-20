import { render, waitFor, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar ', () => {
  it('renders SearchBar', async () => {
    render(<SearchBar />);

    await waitFor(() => {
      screen.getByText(/검색/);
    });
  });
});
