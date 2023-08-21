import { render, screen } from '@testing-library/react';
import FilteredTable from './FilteredTable';
import fixture from '../../fixture';

const context = describe;

describe('FilteredTable', () => {
  context('when render components', () => {
    it('return a text', () => {
      render(<FilteredTable restaurants={fixture.restaurants} />);
      screen.getByText(/식당 이름/);
      screen.getByText(/메뉴/);
      screen.getByText(/종류/);
      screen.getByText(/짜장면/);
      screen.getByText(/메가반점/);
    });
  });
});
