import { render, screen, fireEvent } from '@testing-library/react';

import TextField from './TextField';

const context = describe;
const label = '검색';

describe('TextField', () => {
  const text = 'tester';
  const setText = jest.fn();

  beforeEach(() => {
    setText.mockClear();
  });

  function renderTextField() {
    // given
    render((
      <TextField
        label={label}
        placeholder="식당 이름"
        text={text}
        setText={setText}
      />
    ));
  }

  it('렌더링 검색 바', () => {
    renderTextField();

    screen.getByLabelText(label);
  });

  context('사용자가 text 값을 입력할 때', () => {
    it('change handler가 불린다.', () => {
      renderTextField();

      fireEvent.change(screen.getByLabelText(label), {
        target: {
          value: 'New Name',
        },
      });

      expect(setText).toBeCalledWith('New Name');
    });
  });
});
