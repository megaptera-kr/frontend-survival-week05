import { render, screen, fireEvent } from '@testing-library/react';

import CategoriesButtons from './CategoriesButtons';
import fixtures from '../../fixtures';

jest.mock('../hooks/useCategories', () => () => fixtures.categories);

describe('CategoriesButtons 컴포넌트', () => {
  const mockSetCategory = jest.fn();

  const rendering = (category = '전체') => {
    render(
      <CategoriesButtons category={category} setCategory={mockSetCategory} />,
    );
  };

  beforeEach(() => {
    mockSetCategory.mockClear();
  });

  it('화면 렌더링 되었을 때', () => {
    rendering();
    screen.getByText('전체');
    screen.getByText('한식');
    screen.getByText('양식');
    screen.getByText('일식');
  });

  describe('버튼을 클릭했을 때', () => {
    it('전체 버튼 클릭', () => {
      rendering();

      const buttonElement전체 = screen.getByText('전체');
      const buttonElement한식 = screen.getByText('한식');
      const buttonElement양식 = screen.getByText('양식');
      const buttonElement일식 = screen.getByText('일식');

      fireEvent.click(buttonElement전체);

      expect(mockSetCategory).toHaveBeenCalledTimes(1);
      expect(mockSetCategory).toHaveBeenCalledWith('전체');
      expect(buttonElement전체).toHaveClass('bg-black text-white');
      expect(buttonElement한식).not.toHaveClass('bg-black text-white');
      expect(buttonElement양식).not.toHaveClass('bg-black text-white');
      expect(buttonElement일식).not.toHaveClass('bg-black text-white');
    });
  });
});
