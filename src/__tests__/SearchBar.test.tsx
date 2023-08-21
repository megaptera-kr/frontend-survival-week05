import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import fixtures from '../../fixtures';

const context = describe;

describe('SaerchBar', () => {
  const { restaurants } = fixtures;
  const setQuery = jest.fn();
  const setCategory = jest.fn();

  context('When the user clicks the button', () => {
    it('Call the click handler', () => {
      render(<SearchBar restaurants={restaurants} setQuery={setQuery} setCategory={setCategory} />);
      fireEvent.click(screen.getByText('중식'));
      expect(setCategory).toBeCalledWith('중식');
    });
  });
});
