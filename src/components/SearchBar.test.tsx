import { fireEvent, render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

const context = describe;

let categories: string[];
let filterText: string;

const setFilterText = jest.fn();
const setFilterCategory = jest.fn();

describe('SearchBar', () => {
  function renderSearchBar() {
    render((
      <SearchBar
        categories={categories}
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
    ));
  }
  context('페이지에 접속하면', () => {
    beforeEach(() => {
      categories = ['일식', '중식', '한식'];
      filterText = '초밥';
    });

    it('검색영역이 렌더된다', () => {
      renderSearchBar();

      screen.getByText('전체');
      screen.getByText('일식');
      screen.getByText('중식');
      screen.getByText('한식');

      fireEvent.click(screen.getByText('일식'));

      expect(setFilterCategory).toBeCalledWith('일식');

      fireEvent.change(screen.getByLabelText('검색'), {
        target: { value: '중국집' },
      });

      expect(setFilterText).toBeCalledWith('중국집');
    });
  });
});
