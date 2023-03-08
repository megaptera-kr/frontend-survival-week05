import { render, screen } from '@testing-library/react';

import Menu from './Menu';

import fixtures from '../fixtures';

const context = describe;

describe('Menu', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderMenu() {
    render(<Menu menu={fixtures.menus} />);
  }

  it('renders Menu Components', () => {
    renderMenu();
  });

  context('when user click `선택` button', () => {
    beforeEach(() => {
      renderMenu();
    });

    it('call `handleClickSelect` handeler', () => {
      expect(screen.getAllByText('선택'));
    });
  });
});
