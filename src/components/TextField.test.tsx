import { render, screen, fireEvent } from '@testing-library/react';
import TextField from './TextField';

describe('TextField 컴포넌트', () => {
  const labelClassName = 'mock';
  const inputClassName = 'mock';
  const labelContent = 'search';
  const inputPlaceholder = '...search';
  const text = 'text';
  const mockSetText = jest.fn();
  const rendering = () => {
    render(
      <TextField
        labelClassName={labelClassName}
        labelContent={labelContent}
        inputClassName={inputClassName}
        inputPlaceholder={inputPlaceholder}
        text={text}
        setText={mockSetText}
      />,
    );
  };

  beforeEach(() => {
    mockSetText.mockClear();
  });

  it('화면 렌더링 되었을 때', () => {
    rendering();
    screen.getByLabelText(labelContent);
    screen.getByPlaceholderText(inputPlaceholder);
    screen.getByDisplayValue(text);
  });

  it('Input 값이 입력되었을 때', () => {
    rendering();
    const newText = 'new text';
    const inputElement = screen.getByPlaceholderText(inputPlaceholder);
    fireEvent.change(inputElement, { target: { value: newText } });

    expect(mockSetText).toBeCalledWith(newText);
  });
});
