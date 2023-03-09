/* eslint-disable react/no-children-prop */
import { render, screen } from '@testing-library/react';

import MenuItem from './MenuItem';

import fixtures from '../fixtures';

import Food from '../types/Food';

const context = describe;

let food: Food;
let children: string;

describe('MenuItem', () => {
  function renderMenuItem() {
    render(<MenuItem food={food} children={children} />);
  }
  context('메뉴가 선택되면', () => {
    beforeEach(() => {
      food = fixtures.food;
    });

    it('음식 이름과 가격이 render된다', () => {
      renderMenuItem();

      screen.getByText('볶음밥(3,000원)');
    });
  });
});
