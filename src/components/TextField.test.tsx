import { render, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('TextField', () => {
  const setFilterText = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderTextField = () => render(
    <TextField
      label="Filter"
      placeholder="Type to filter"
      text="text"
      setText={setFilterText}
    />,
  );

  it('레이블과 인풋을 렌더링', () => {
    const { getByLabelText, getByPlaceholderText } = renderTextField();

    expect(getByLabelText('Filter')).toBeInTheDocument();
    expect(getByPlaceholderText('Type to filter')).toBeInTheDocument();
  });

  it('입력 변경 시 setFilterText를 호출', () => {
    const { getByLabelText } = renderTextField();

    fireEvent.change(getByLabelText('Filter'), { target: { value: 'test' } });

    expect(setFilterText).toBeCalledWith('test');
  });
});
