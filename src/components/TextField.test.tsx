/* eslint-disable comma-dangle */
import { fireEvent, render, screen } from '@testing-library/react';
import TextField from './TextField';

const context = describe;

describe('TextField', () => {
  const label = 'Search';
  const placeholder = '식당 이름';
  const text = '메가';
  const setText = jest.fn();

  beforeEach(() => {
    setText.mockClear();
    // 또는 jest.clearAllMocks();
  });

  function renderTextField() {
    render(
      <TextField
        label={label}
        placeholder={placeholder}
        text={text}
        setText={setText}
      />
    );
  }

  context('화면에 렌더링 된 후', () => {
    it('input의 요소 확인 테스트', () => {
      // When
      renderTextField();

      // Then
      screen.getByLabelText(/Search/);
      screen.getByDisplayValue(text);
      screen.getByPlaceholderText(placeholder);
    });
  });

  context('input onChange 이벤트 기능 테스트', () => {
    it('텍스트를 입력한 후 handleChange 테스트', () => {
      // Given
      renderTextField();

      // When
      fireEvent.change(screen.getByLabelText(/Search/), {
        target: { value: '메가반점' },
      });

      expect(setText).toBeCalledWith('메가반점');
    });
  });
});
