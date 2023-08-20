import { fireEvent, render, screen } from '@testing-library/react';

import TextField from './TextField';

const context = describe;
const label = '검색어';
const value = 'Tester';
const setValue = jest.fn();

function renderTextField() {
  render((
    <TextField
      label={label}
      placeholder="식당 이름을 입력해주세요."
      value={value}
      setValue={setValue}
    />
  ));
}

describe('TextField', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('TextField를 렌더링 한다.', () => {
    renderTextField();

    screen.getByLabelText(label);
    screen.getByDisplayValue(value);
    screen.getAllByPlaceholderText(/입력해주세요/);
  });

  context('검색어를 입력하면', () => {
    it('setValue를 검색어를 인자로 호출한다.', () => {
      renderTextField();

      fireEvent.change(screen.getByLabelText(label), {
        target: { value: '마라탕' },
      });

      expect(setValue).toBeCalledWith('마라탕');
    });
  });
});
