import { fireEvent, render, screen } from '@testing-library/react';
import TextFiled from './TextFiled';

const context = describe;

describe('TextFiled', () => {
  const label = '검색';
  const placeholder = '식당 이름';
  const text = '메가반점';
  const setText = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderTextFiled() {
    render(
      <TextFiled
        label={label}
        placeholder={placeholder}
        text={text}
        setText={setText}
      />,
    );
  }
  it('TextFiled가 렌더링이 되었는가?', () => {
    renderTextFiled();

    screen.getByLabelText(label);
    screen.getByPlaceholderText(placeholder);
    screen.getByDisplayValue(text);
  });

  context('사용자가 식당 이름을 입력하면', () => {
    it('"setText" 핸들러가 호출된다. ', () => {
      renderTextFiled();

      fireEvent.change(screen.getByLabelText(label), {
        target: { value: '메가 반점' },
      });

      expect(setText).toBeCalledWith('메가 반점');
    });
  });
});
