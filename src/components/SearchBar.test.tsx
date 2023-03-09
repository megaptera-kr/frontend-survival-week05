import {
  render, screen, fireEvent,
} from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar Test ', () => {
  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  beforeAll(() => {
    jest.clearAllMocks();
  });

  const renderSearchBar = () => {
    render(<SearchBar filterText="" categories={['한식', '중식', '일식']} setFilterText={setFilterText} setFilterCategory={setFilterCategory} />);
  };

  it('render', () => {
    renderSearchBar();
    screen.getByPlaceholderText('식당 이름');
    expect(screen.getAllByRole('button').length).toBe(4);
  });

  it('filter text change', () => {
    renderSearchBar();
    fireEvent.change(screen.getByLabelText('검색'), {
      target: {
        value: '식당 검색',
      },
    });
    expect(setFilterText).toBeCalledWith('식당 검색');
  });

  it('filter button click', () => {
    renderSearchBar();
    fireEvent.click(screen.getByText('한식'));
    expect(setFilterCategory).toBeCalledWith('한식');
  });
});
