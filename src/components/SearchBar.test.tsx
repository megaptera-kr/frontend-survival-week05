import { fireEvent, render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  const categories = ['중식', '일식', '양식'];
  const filterText = '홍콩반점';
  const setFilterText = jest.fn();
  const setFilterCategory = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const setup = (props = {}) => {
    const initialProps = {
      categories,
      filterText,
      setFilterText,
      setFilterCategory,
    };

    render(<SearchBar {...initialProps} {...props} />);
  };

  it('renders TextField and categories buttons', () => {
    setup();

    screen.getAllByPlaceholderText('식당 이름');
    screen.getByText(categories[0]);
    screen.getByText(categories[1]);
    screen.getByText(categories[2]);
  });

  it('renders filterText properly', () => {
    setup({ filterText: '필터텍스트' });

    screen.getByDisplayValue('필터텍스트');
  });

  it('calls setFilterText and setFilterCategory', () => {
    setup();
    const typing = '메리';

    fireEvent.change(screen.getByPlaceholderText('식당 이름'), {
      target: { value: typing },
    });
    expect(setFilterText).toBeCalledWith(typing);

    fireEvent.click(screen.getByText(categories[2]));
    expect(setFilterCategory).toBeCalledWith(categories[2]);
  });
});
