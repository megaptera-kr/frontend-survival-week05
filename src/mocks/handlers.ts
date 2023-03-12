// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

import fixtures from '../fixtures';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({ restaurants: fixtures.restaurants }),
  )),
  rest.post(`${BASE_URL}/orders`, (req, res, ctx) => res(
    ctx.status(201),
    ctx.json({ receipt: fixtures.receipt }),
  )),
];

export default handlers;
