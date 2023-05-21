import {
  fireEvent, render, screen,
} from '@testing-library/react';
import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  const filterText = '';
  const setFilterText = jest.fn();

  it('render search input', () => {
    render(<SearchBar
      filterText={filterText}
      setFilterText={setFilterText}
    />);

    screen.getByLabelText('검색');
    screen.getByPlaceholderText(/식당 이름/);
  });

  it('change input value', () => {
    render(<SearchBar
      filterText={filterText}
      setFilterText={setFilterText}
    />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '메리' } });
    expect(setFilterText).toBeCalledWith('메리');
  });
});
