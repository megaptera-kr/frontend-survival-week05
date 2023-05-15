import { render, screen, waitFor } from '@testing-library/react';

import Menu from './Menu';

import foods from '../../../fixtures/foods';

const context = describe;

describe('Menu', () => {
  function renderMenu() {
    render((
      <Menu menu={foods} />
    ));
  }

  context('when foods의 데이터를 받았을 때', () => {
    it('foods의 이름과 카테고리가 보인다.', async () => {
      renderMenu();

      await waitFor(() => {
        screen.getByText(/짜장면/);
        screen.getByText(/8,000원/);

        screen.getByText(/짬뽕/);
        screen.getByText(/5,000원/);
      });
    });

    it('foods의 버튼이 보인다.', async () => {
      renderMenu();

      await waitFor(() => {
        const button = screen.getAllByRole('button', { name: '선택' });
        expect(button.length).toBeGreaterThan(0);
      });
    });
  });
});
