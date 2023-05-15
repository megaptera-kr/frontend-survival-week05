import server from './mocks/server';

// 모든 테스트 실행 전에 MSW 서버 실행
// onUnhandledRequest : 핸들러 없다면 에러내서 실수 방지
beforeAll(() => {
  console.log('실행됨');
  server.listen({ onUnhandledRequest: 'error' });
});

// 모든 테스트 실행 후에 서버 닫기
afterAll(() => server.close());

// 각 테스트 실행 후에 서버 리셋
afterEach(() => server.resetHandlers());
