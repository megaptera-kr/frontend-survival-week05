/* eslint-disable comma-dangle */
import { fireEvent, render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

const context = describe;

describe('SearchBar', () => {
  // given
  const categories = ['한식'];
  const filterText = '짜';
  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  context('사용자가 텍스트를 입력했을때', () => {
    it('filterText가 "짜" 라면?', () => {
      render(
        <SearchBar
          categories={categories}
          filterText={filterText}
          setFilterText={setFilterText}
          setFilterCategory={setFilterCategory}
        />
      );
      expect(screen.getByText(/한식/)).toBeInTheDocument();
      fireEvent.change(screen.getByPlaceholderText('식당 이름'));
      fireEvent.click(screen.getByText('한식'));
      expect(setFilterCategory).toBeCalled();
    });
  });
});
