import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FilterableRestaurantsTable from './FilterableRestaurantsTable';

const context = describe;

describe('FilterableRestaurantsTable', () => {
  function renderFilterableRestaurantsTable() {
    return render(<FilterableRestaurantsTable />);
  }

  it('render correctly', async () => {
    const { asFragment } = renderFilterableRestaurantsTable();

    await screen.findByText('메가반점');

    expect(asFragment()).toMatchSnapshot();
  });

  context('when type search text', () => {
    it('restaurants that are included in the search text is rendered', async () => {
      renderFilterableRestaurantsTable();

      const searchInput = screen.getByLabelText('검색');
      await userEvent.type(searchInput, '메가');

      await waitFor(() => expect(screen.getByText('메가반점')).toBeInTheDocument());
    });
  });

  context('when select "한식" category', () => {
    it('only restaurants with "한식" will be rendered', async () => {
      renderFilterableRestaurantsTable();

      const radioBtn = await screen.findByLabelText('한식');
      userEvent.click(radioBtn);

      await waitFor(() => expect(screen.queryByText('흑동고래카레')).toBeNull());
      await waitFor(() => expect(screen.queryByText('메가반점')).toBeNull());
      await waitFor(() => expect(screen.getByText('메리김밥')).toBeInTheDocument());
    });
  });
});
