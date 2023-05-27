import { fireEvent, render, screen } from '@testing-library/react';
import Categories from './Categories';

const context = describe;
const setFilterCategory = jest.fn();

describe('Categories', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  context('when render components', () => {
    it('return ', () => {
      render(<Categories category="전체" setFilterCategory={setFilterCategory} />);
      screen.getByText(/전체/);
    });
  });
  context('when clickbutton', () => {
    it('return ', () => {
      render(<Categories category="전체" setFilterCategory={setFilterCategory} />);
      fireEvent.click(screen.getByText('전체'), () => {
        expect(setFilterCategory).toBeCalled();
      });
    });
  });
});
