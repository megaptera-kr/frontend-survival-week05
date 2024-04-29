import { fireEvent, render, screen } from '@testing-library/react';
import TextField from '.';

const context = describe;

describe('TextField', () => {
  // given
  const label = 'search';
  const placeholder = '검색';
  const text = '';
  const setText = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    render(<TextField
      label={label}
      placeholder={placeholder}
      text={text}
      setText={setText}
    />);
  });

  // when
  context('label, placeholder props를 전달하면', () => {
    // then
    it('label, placeholder props가 화면에 나타난다.', () => {
      screen.getByLabelText(label);
      screen.getByPlaceholderText(placeholder);
    });
  });

  // when
  context('사용자가 이름을 입력하면', () => {
    // then
    it('setText 함수를 호출한다.', () => {
      fireEvent.change(screen.getByLabelText(label), {
        target: { value: 'New Name' },
      });
      expect(setText).toHaveBeenCalledWith('New Name');
    });
  });
});
