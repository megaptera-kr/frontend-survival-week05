import { render, screen } from '../../hooks/tests/restaurantContextRender';

import RestaurantsTable from './RestaurantsTable';

describe('RestaurantsTableBody ', () => {
  const renderRestaurantsTableBody = () => render(
    <RestaurantsTable />,
  );

  it('renders restaurants body', () => {
    renderRestaurantsTableBody();

    expect(screen.getByText(/식당 이름/)).toBeInTheDocument();
    expect(screen.getByText(/중식/)).toBeInTheDocument();
  });
});
