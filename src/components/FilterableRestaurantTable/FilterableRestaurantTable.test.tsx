import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';
import FilterableRestaurantTable from '.';

const context = describe;

// 하위 컴포넌트에서 props 전달받으면 렌더링 해주는지 테스트 완료 되었으니,
// 상위 컴포넌트에서는 상태변경함수 호출 테스트
describe('FilterableRestaurantTable 컴포넌트', () => {
  beforeEach(() => {
    render(<FilterableRestaurantTable />);
  });

  context('올바르게 렌더링된다면', () => {
    it('useFetchRestaurants 훅으로 restaurants 데이터를 요청한다.', async () => {
      // NOTE: render함수를 waitFor 내부에 넣으면 테스트 계속 돈다.
      await waitFor(() => {
        expect(screen.getByText(/혹등고래카레/)).toBeInTheDocument();
      });
    });
  });

  context('검색어를 "메"라고 변경하면', () => {
    it('화면에 "메가반점", "메리김밥"은 렌더링되고 "혹등고래카레"는 렌더링되지 않는다.', async () => {
      fireEvent.change(screen.getByLabelText('검색'), {
        target: { value: '메' },
      });
      await waitFor(() => {
        expect(screen.getByText(/메가반점/)).toBeInTheDocument();
        expect(screen.getByText(/메리김밥/)).toBeInTheDocument();
        expect(screen.queryByText(/혹등고래카레/)).toBeNull();
      });
    });
  });

  context('중식 카테고리를 선택하면', () => {
    it('"메가반점"만 렌더링 되고 "메리김밥", "혹등고래카레"는 렌더링 되지 않는다.', async () => {
      await waitFor(() => {
        const chCategoryBtn = screen.getAllByText('중식').find(
          (elem) => elem.tagName === 'BUTTON',
        );

        if (chCategoryBtn) {
          fireEvent.click(chCategoryBtn);
          expect(screen.getByText(/메가반점/)).toBeInTheDocument();
          expect(screen.queryByText(/메리김밥/)).toBeNull();
          expect(screen.queryByText(/혹등고래카레/)).toBeNull();
        } else {
          throw new Error('New Error: 중식 카테고리 버튼이 없습니다.');
        }
      });
    });
  });
});
