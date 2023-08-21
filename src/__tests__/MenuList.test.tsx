import { render, fireEvent, screen } from '@testing-library/react';

import RestaurantTableRow from '../components/MenuList';

import fixtures from '../../fixtures';

const context = describe;

describe('MenuList', () => {
  const { foods } = fixtures;

  const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

  const rednerComponents = (idx: number) => {
    render((<RestaurantTableRow food={foods[idx]} />));
  };

  context('선택 버튼을 눌렀을 때', () => {
    it('로컬 스토리지에 아이템을 추가한다.', () => {
      rednerComponents(1);
      fireEvent.click(screen.getByRole('button'));
      expect(setItemSpy).toHaveBeenCalledWith('cart', JSON.stringify([foods[1]]));
    });
  });

  // context('When you click the Select button', () => {
  //   it('Call the click handler', () => {
  //     rednerComponents(0);
  //     fireEvent.click(screen.getByTestId('#짜장면'));
  //     // expect(handleClickBtn).toBeCalledWith(foods[0]);
  //   });
  // });
});
