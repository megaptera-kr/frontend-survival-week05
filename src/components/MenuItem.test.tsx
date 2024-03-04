/* eslint-disable comma-dangle */
import { render } from '@testing-library/react';
import MenuItem from './MenuItem';
import foods from '../../fixtures/foods';

describe('MenuItem', () => {
  const menu = foods[0];
  // const { id, name, price } = foods[0];

  it('음식이름과 음식가격 출력되어 있는지 확인', () => {
    // When
    const { getByText } = render(
      <MenuItem food={menu}>
        <button type="button">선택</button>
      </MenuItem>
    );

    // Then
    // expect(screen.getByText(/짜장면/)).toBeTruthy();
    expect(getByText(/짜장면/)).toBeTruthy();
    expect(getByText(/8,000원/)).toBeTruthy();
    expect(getByText('선택')).toBeTruthy();
  });
});
