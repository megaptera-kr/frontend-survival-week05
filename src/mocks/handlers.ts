// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import fixtures from '../../fixtures';

const BASE_URL = 'http://localhost:3000';

const { restaurants, receipt } = fixtures;

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({ restaurants }),
  )),

  rest.post(`${BASE_URL}/orders`, (req, res, ctx) => res(
    ctx.status(201),
    ctx.json({ receipt }),
  )),
];

export default handlers;
