import { render, screen } from '@testing-library/react';
import FilterableRestaurantsTable from './FilterableRestaurantsTable';
import fixtures from '../../fixtures';

describe('FilterableRestaurantsTable', () => {
  const { restaurants } = fixtures;

  const onAddCart = jest.fn();

  function renderFilterableRestaurantsTable() {
    render((
      <FilterableRestaurantsTable
        restaurants={restaurants}
        onAddCart={onAddCart}
      />
    ));
  }

  it('render restaurants', () => {
    renderFilterableRestaurantsTable();

    screen.getByText(/메가/);
    screen.getByText(/짬뽕/);
  });
});
