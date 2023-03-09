import { fireEvent, render, screen } from '@testing-library/react';

import TextField from './TextField';

describe('<TextField />', () => {
  const label = 'Name';
  const text = 'Tester';
  const placeholder = '플레이스홀더';
  const setText = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const setup = (props = {}) => {
    const initialProps = {
      label,
      placeholder,
      text,
      setText,
    };

    render(<TextField {...initialProps} {...props} />);

    const labelEl = screen.getByLabelText(label);
    const inputEl = screen.getByPlaceholderText(placeholder);

    return { labelEl, inputEl };
  };

  it('has label and input elements', () => {
    const { labelEl, inputEl } = setup();

    expect(labelEl).toBeTruthy();
    expect(inputEl).toBeTruthy();
  });

  it('calls setText', () => {
    const { inputEl } = setup();
    const typing = '메리';

    fireEvent.change(inputEl, {
      target: { value: typing },
    });

    expect(setText).toBeCalledWith(typing);
  });
});
