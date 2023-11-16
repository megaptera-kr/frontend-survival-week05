import { fireEvent, render, screen } from '@testing-library/react';
import CategoryButtons from './CategoryButtons';

const context = describe;
describe('CategoryButtons', () => {
  const setCategory = jest.fn();

  // 매번 사용할 때 마다 초기화 해주기
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders elements', () => {
    // when
    render(<CategoryButtons setCategory={setCategory} />);

    // then
    screen.getByText('전체');
    screen.getByText('중식');
    screen.getByText('한식');
    screen.getByText('일식');
  });

  // button을 클릭했을때 category가 잘 변하는지 보고싶다.
  context('when user click button', () => {
    it('calls setCategory handler', () => {
      render(<CategoryButtons setCategory={setCategory} />);

      fireEvent.click(screen.getByText('중식'));
      expect(setCategory).toHaveBeenCalledWith('중식');
    });
  });
});
