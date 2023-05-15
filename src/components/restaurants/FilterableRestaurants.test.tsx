import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import FilterableRestaurants from './FilterableRestaurants';

const context = describe;

describe('FilterableRestaurants', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  function renderFilterableRestaurants() {
    render(
      <FilterableRestaurants />,
    );
  }
  context('서버에서 데이터 응답 전', () => {
    it('검색할 수 있는 인풋이 렌더링 된다', () => {
      renderFilterableRestaurants();

      const input = screen.getByPlaceholderText('식당 이름');

      expect(input).toBeInTheDocument();
    });
    it('필터링 가능한 전체 버튼만 렌더링 된다', () => {
      renderFilterableRestaurants();

      const button = screen.getByRole('button', { name: '전체' });

      expect(button).toBeInTheDocument();
    });
    it('"식당이 존재하지 않습니다."내용이 있는 테이블이 렌더링 된다', () => {
      renderFilterableRestaurants();

      const table = screen.getByRole('table');
      const tbody = screen.getByText('식당이 존재하지 않습니다.');

      expect(table).toBeInTheDocument();
      expect(tbody).toBeInTheDocument();
    });
  });

  context('서버에서 데이터가 응답 후', () => {
    it('식당을 필터링 할 수 있는 버튼들이 모두 렌더링 된다', async () => {
      renderFilterableRestaurants();

      await waitFor(() => {
        const koreanFoodButton = screen.getByRole('button', { name: '한식' });
        const chinaFoodButton = screen.getByRole('button', { name: '중식' });
        const japaneseFoodButton = screen.getByRole('button', { name: '일식' });

        expect(koreanFoodButton).toBeInTheDocument();
        expect(chinaFoodButton).toBeInTheDocument();
        expect(japaneseFoodButton).toBeInTheDocument();
      });
    });
    it('식당들이 모두 렌더링 된다', async () => {
      renderFilterableRestaurants();

      await waitFor(() => {
        const restaurant1 = screen.getByText('메가반점');
        const restaurant2 = screen.getByText('메리김밥');
        const restaurant3 = screen.getByText('혹등고래카레');

        expect(restaurant1).toBeInTheDocument();
        expect(restaurant2).toBeInTheDocument();
        expect(restaurant3).toBeInTheDocument();
      });
    });
    it('검색어를 "메가"라고 입력하면 "메가반점"만 렌더링 된다 ', async () => {
      renderFilterableRestaurants();

      fireEvent.change(screen.getByLabelText('검색'), {
        target: {
          value: '메가',
        },
      });

      await waitFor(() => {
        const restaurant1 = screen.getByText('메가반점');
        const restaurant2 = screen.queryByText('메리김밥');
        const restaurant3 = screen.queryByText('혹등고래카레');
        expect(restaurant1).toBeInTheDocument();
        expect(restaurant2).toBeNull();
        expect(restaurant3).toBeNull();
      });
    });
    it('"한식"버튼을 클릭하면 "메리김밥"만 렌더링 된다 ', async () => {
      renderFilterableRestaurants();

      const categorySelect = await screen.findByRole('button', { name: '한식' });

      fireEvent.click(categorySelect);

      await waitFor(() => {
        const restaurant1 = screen.queryByText('메가반점');
        const restaurant2 = screen.getByText('메리김밥');
        const restaurant3 = screen.queryByText('혹등고래카레');
        expect(restaurant1).toBeNull();
        expect(restaurant2).toBeInTheDocument();
        expect(restaurant3).toBeNull();
      });
    });
  });
});
