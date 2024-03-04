/* eslint-disable comma-dangle */
import { fireEvent, render } from '@testing-library/react';
import SearchBar from './SearchBar';

const context = describe;

describe('SearchBar', () => {
  // Given
  const categories = ['한식', '중식', '일식'];
  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderSearchBar() {
    return render(
      <SearchBar
        filterText=""
        categories={categories}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
    );
  }

  context('SearchBar 컴포넌트의 렌더링 테스트', () => {
    it('렌더링이 제대로 되는지 테스트', () => {
      // When
      const { getByText, getByPlaceholderText } = renderSearchBar();

      // Then
      expect(getByText(/검색/)).toBeInTheDocument();
      expect(getByPlaceholderText('식당 이름')).toBeInTheDocument();
      expect(getByText('전체')).toBeInTheDocument();
    });
  });

  context('TextField 컴포넌트 기능 테스트', () => {
    it('값을 입력했을 때 setFilterText가 호출되는지 테스트', () => {
      const { getByPlaceholderText } = renderSearchBar();

      fireEvent.change(getByPlaceholderText('식당 이름'), {
        target: { value: '메가반점' },
      });

      expect(setFilterText).toBeCalledWith('메가반점');
    });
  });

  context('Categories 컴포넌트 기능 테스트', () => {
    it('카테고리를 선택했을 때 setFilterCategory가 호출되는지 테스트', () => {
      // When
      const { getByText } = renderSearchBar();

      const CategoryButton = getByText('일식');
      fireEvent.click(CategoryButton);

      expect(setFilterCategory).toHaveBeenCalledWith('일식');
    });
  });
});
