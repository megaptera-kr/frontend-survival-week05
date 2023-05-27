import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

const context = describe;
const setFilterText = jest.fn();
const setFilterCategory = jest.fn();

describe('SearchBar', () => {
  context('when render it', () => {
    it('return', () => {
      render(
        <SearchBar
          category={['한식', '중식', '일식']}
          filterText="메가"
          setFilterText={setFilterText}
          filterCategory="전체"
          setFilterCategory={setFilterCategory}
        />,
      );
      screen.getByDisplayValue('메가');
      screen.getByText('전체');
      screen.getByText('한식');
      screen.getByText('중식');
    });
  });
});
