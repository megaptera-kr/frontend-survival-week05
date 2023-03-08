import { fireEvent, render, screen } from '@testing-library/react';
import Menu from './Menu';
import { restaurants } from '../fixtures';

describe('Menu', () => {
  const setLocalStorageItem = jest.fn((val: any) => val);
  beforeAll(() => {
    Storage.prototype.setItem = setLocalStorageItem;
  });
  afterAll(() => {
    setLocalStorageItem.mockRestore();
  });
  it('render with menu items', () => {
    render(<Menu menu={restaurants[0].menu} />);
    expect(screen.getAllByText(/선택/).length).toBe(restaurants[0].menu.length);
    fireEvent.click(screen.getAllByText(/선택/)[0]);
    expect(setLocalStorageItem).toBeCalled();
  });
});
