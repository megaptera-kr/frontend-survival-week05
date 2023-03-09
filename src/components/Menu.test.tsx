import { fireEvent, render, screen } from '@testing-library/react';

import Menu from './Menu';

import fixtures from '../fixtures';

describe('<Menu />', () => {
  it('renders menu properly', () => {
    render(<Menu menu={fixtures.restaurants[0].menu} />);

    // FIXME: 질문) 변수를 이용한 것과 넣어주는 것중 어느게 좋을지
    // 변수는 fixtures가 바껴도 추적이 돼서 좋은 것 같은데, 직관적이지 않은 것 같음.
    screen.getByText(/짜장면/);
    screen.getByText(/탕수육/);
    screen.getByText(new RegExp(fixtures.restaurants[0].menu[2].name));
  });

  it('adds selectFood in localStorage', () => {
    jest.spyOn(Storage.prototype, 'setItem');

    render(<Menu menu={fixtures.restaurants[0].menu} />);

    fireEvent.click(screen.getAllByText('선택')[0]);

    expect(localStorage.setItem).toBeCalledWith(
      'cart',
      JSON.stringify([fixtures.restaurants[0].menu[0]]),
    );
  });
});
