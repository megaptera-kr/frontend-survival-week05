import { render, screen } from '@testing-library/react';
import MenuFood from './MenuFood';
import fixture from '../../fixture';

const context = describe;

describe('MenuFood', () => {
  context('render a components', () => {
    it('return a text', () => {
      render(<MenuFood menu={fixture.foods[0]} />);
      screen.getByText(/짜장면/);
    });
  });
});
