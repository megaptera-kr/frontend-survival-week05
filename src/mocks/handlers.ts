// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import fixtures from '../../fixtures';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => {
    const { restaurants } = fixtures;

    return res(
      ctx.status(200),
      ctx.json({ restaurants }), // 위의 요청을 이 형태로 반환
    );
  }),
];
export default handlers;
