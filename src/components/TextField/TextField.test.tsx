import { render, screen } from '@testing-library/react';
import TextField from '.';

const context = describe;

describe('TextField', () => {
  // given
  const label = 'search';
  const placeholder = '검색';

  // when
  context('label, placeholder props를 전달하면', () => {
    render(<TextField label={label} placeholder={placeholder} />);

    // then
    it('label, placeholder props가 화면에 나타난다.', () => {
      screen.getByLabelText(label);
      screen.getByPlaceholderText(placeholder);
    });
  });
});
