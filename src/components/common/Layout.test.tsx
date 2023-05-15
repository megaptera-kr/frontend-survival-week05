import { render, screen, waitFor } from '@testing-library/react';
import Layout from './Layout';
import CategoryButtonGroup from '../restaurants/CategoryButtonGroup';

const context = describe;
describe('Layout', () => {
  const title = '푸드코트 키오스크';
  const setSelectCategory = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('div 테그를 자식 노드로 전달하였을 때', () => {
    it('테스트 노드 글씨가 렌더링 된다', () => {
      render(
        <Layout
          title={title}
        >
          <div>테스트 노드</div>
        </Layout>,
      );

      screen.getByText(title);
      screen.getByText('테스트 노드');
    });
  });

  context('CategoryButtonGroup 컴포넌트를 자식 노드로 전달하였을 때', () => {
    it('전체, 한식, 중식, 일식 글씨가 렌더링 된다', async () => {
      render(
        <Layout
          title={title}
        >
          <CategoryButtonGroup
            setSelectCategory={setSelectCategory}
          />
        </Layout>,
      );

      screen.getByText(title);

      await waitFor(() => {
        screen.getByText('전체');
        screen.getByText('한식');
        screen.getByText('중식');
        screen.getByText('일식');
      });
    });
  });
});
