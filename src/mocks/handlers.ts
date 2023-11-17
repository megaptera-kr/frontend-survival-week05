import { rest } from 'msw';
import fixtures from '../../fixtures';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(fixtures.restaurants),
    );
  }),
];

export default handlers;