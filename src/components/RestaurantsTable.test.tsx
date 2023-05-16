import RestaurantsTable from './RestaurantsTable';

import { render, screen } from '../../hooks/tests/restaurantContextRender';

const context = describe;

describe('RestaurantsTable ', () => {
  const renderRestaurantsTable = () => render(
    <RestaurantsTable />,
  );

  context('푸드코트 데이터 확인', () => {
    it('식당 이름 확인', () => {
      renderRestaurantsTable();

      expect(screen.getByText(/식당 이름/)).toBeInTheDocument();
    });

    it('식당 리스트 확인', () => {
      renderRestaurantsTable();

      expect(screen.getByText(/중식/)).toBeInTheDocument();
      expect(screen.getByText(/메리김밥/)).toBeInTheDocument();
      expect(screen.getByText(/짜장면/)).toBeInTheDocument();
    });
  });

  it('button element test', () => {
    renderRestaurantsTable();

    const buttons = screen.getAllByRole('button');
    buttons.forEach((button) => expect(button).toHaveTextContent('선택'));
  });
});
