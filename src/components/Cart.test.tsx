import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';

import Cart from './Cart';

describe('Cart test ', () => {
  const setReceipt = jest.fn();
  const getLocalStorageItem = jest.fn(() => JSON.stringify([{ id: '15', name: '특선초밥', price: 17900 }, { id: '16', name: '스페셜초밥', price: 21000 }]));
  const setLocalStorageItem = jest.fn((val: any) => val);

  beforeAll(() => {
    Storage.prototype.getItem = getLocalStorageItem;
    Storage.prototype.setItem = setLocalStorageItem;
    jest.clearAllMocks();
  });
  afterAll(() => {
    getLocalStorageItem.mockRestore();
    setLocalStorageItem.mockRestore();
  });

  it('cart list from localstorage', () => {
    render(<Cart setReceipt={setReceipt} />);
    screen.getByText(/스페셜초밥/);
    const button = screen.getByRole('button', { name: /합계/ });
    expect(button).toHaveTextContent(/38,900/);
  });

  it('cancel cart menu', () => {
    render(<Cart setReceipt={setReceipt} />);
    const cancelButton = screen.getAllByRole('button', { name: /취소/ })[0];
    fireEvent.click(cancelButton);
    waitFor(() => {
      expect(setLocalStorageItem).toBeCalled();
      const button = screen.getByRole('button', { name: /합계/ });
      expect(button).toHaveTextContent(/21,000/);
    });
  });

  it('make order', async () => {
    // render(<Cart setReceipt={setReceipt} />);
    // const button = screen.getAllByRole('button', { name: /합계/ })[0];
    // fireEvent.click(button);
    // waitFor(() => {
    //   expect(setReceipt).toBeCalled();
    //   expect(setLocalStorageItem).toBeCalled();
    // });
  });
});
