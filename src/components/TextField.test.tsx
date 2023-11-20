import { fireEvent, render, screen } from '@testing-library/react';

import TextField from './TextField';

const context = describe;
describe('TextField', () => {
  // given
  const setValue = jest.fn();
  // 매번 사용할 때 마다 초기화 해주기
  beforeEach(() => {
    // setValue.mockClear();
    jest.clearAllMocks();
  });

  const label = '검색';

  function renderTextField() {
    render(<TextField
      setValue={setValue}
      value="안녕"
      label={label}
    />);
  }

  it('renders elements', () => {
    // when
    renderTextField();
    // then
    screen.getByLabelText('검색');
    screen.getByDisplayValue('안녕');
  });

  context('when user enters name', () => {
    it('calls "setValue" handler', () => {
      renderTextField();
      // when
      fireEvent.change(screen.getByLabelText(label), {
        target: { value: 'New Name' },
      });

      expect(setValue).toBeCalledWith('New Name');
    });
  });
});
