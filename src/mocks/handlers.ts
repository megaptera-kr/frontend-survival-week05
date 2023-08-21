// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import fixtures from '../../fixture';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => {
    const { restaurants } = fixtures;
    return res(
      ctx.status(200),
      ctx.json({ restaurants }),
    );
  }),
  rest.get(`${BASE_URL}/orders`, (req, res, ctx) => {
    const { receipt } = fixtures;
    return res(
      ctx.status(200),
      ctx.json({ receipt }),
    );
  }),
];

export default handlers;
