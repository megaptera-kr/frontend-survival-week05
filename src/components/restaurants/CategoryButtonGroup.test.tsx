import { render, screen, waitFor } from '@testing-library/react';
import CategoryButtonGroup from './CategoryButtonGroup';

const context = describe;

describe('CategoryButtonGroup', () => {
  const setSelectCategory = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderCategoryButtonGroup() {
    render(<CategoryButtonGroup
      setSelectCategory={setSelectCategory}
    />);
  }
  context('data를 서버에서 가져오지 못했을 때', () => {
    it('화면에는 전체 버튼만 랜더링 된다.', () => {
      renderCategoryButtonGroup();

      screen.getByText('전체');
    });
  });
  context('data를 서버에서 가져왔을 때', () => {
    it('화면에는 전체, 중식, 한식, 일식 버튼이 랜더링 된다.', async () => {
      renderCategoryButtonGroup();

      await waitFor(() => {
        screen.getByText('전체');
        screen.getByText('한식');
        screen.getByText('중식');
        screen.getByText('일식');
      });
    });
  });
});
