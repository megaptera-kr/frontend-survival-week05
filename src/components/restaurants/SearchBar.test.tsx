import { render, screen, waitFor } from '@testing-library/react';
import SearchBar from './SearchBar';

const context = describe;

describe('SearchBar', () => {
  const text = '';
  const setText = jest.fn();
  const setSelectCategory = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderSearchBar() {
    render(
      <SearchBar
        text={text}
        setText={setText}
        setSelectCategory={setSelectCategory}
      />,
    );
  }

  context('서버에서 데이터가 불러오기 전', () => {
    it('검색할 수 있는 인풋과 전체버튼만 렌더링 된다', () => {
      renderSearchBar();

      screen.getByPlaceholderText('식당 이름');
      screen.getByText('전체');
    });
  });

  context('서버에서 데이터가 불러오기 전', () => {
    it('검색할 수 있는 인풋과 식당을 필터링 할 수 있는 버튼들이 렌더링 된다', async () => {
      renderSearchBar();

      screen.getByPlaceholderText('식당 이름');
      await waitFor(() => {
        screen.getByText('전체');
        screen.getByText('한식');
        screen.getByText('중식');
        screen.getByText('일식');
      });
    });
  });
});
