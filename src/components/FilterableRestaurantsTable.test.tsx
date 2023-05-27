import { render, screen } from '@testing-library/react';
import FilterableRestaurantsTable from './FilterableRestaurantsTable';
import fixture from '../../fixture';

const { restaurants } = fixture;

describe('FilterableRestaurantsTable', () => {
  it('when render components', () => {
    render(<FilterableRestaurantsTable restaurants={restaurants} />);

    screen.getByText(/메가반점/);
    screen.getByText(/메리김밥/);
  });
});
