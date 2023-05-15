import { render, screen, waitFor } from '@testing-library/react';

import MenuItem from './MenuItem';

import foods from '../../../fixtures/foods';

const context = describe;

describe('MenuItem', () => {
  const food = foods[0];

  function renderMenuItem() {
    render((
      <MenuItem food={food}>
        <button
          type="button"
          name={`#${food.name}`}
        >
          선택
        </button>
      </MenuItem>
    ));
  }

  context('when food 데이터를 받았을 때', () => {
    it('food의 이름과 카테고리가 보인다.', async () => {
      renderMenuItem();
      await waitFor(() => {
        screen.getByText(/짜장면/);
        screen.getByText(/8,000원/);
      });
    });

    it('food의 버튼이 보인다.', async () => {
      renderMenuItem();
      await waitFor(() => {
        const button = screen.getByRole('button', { name: '선택' });
        expect(button).toBeInTheDocument();
      });
    });
  });
});
