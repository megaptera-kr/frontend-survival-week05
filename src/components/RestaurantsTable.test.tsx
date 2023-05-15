import { render, screen } from '@testing-library/react';
import RestaurantsTable from './RestaurantsTable';
import fixtures from '../../fixtures';

describe('RestaurantsTable', () => {
  const { restaurants } = fixtures;

  const onAddCart = jest.fn();

  it('renders table headers', () => {
    render(<RestaurantsTable
      restaurants={restaurants}
      onAddCart={onAddCart}
    />);

    screen.getByText('식당 이름');
    screen.getByText('종류');
    screen.getByText('메뉴');
  });
});
