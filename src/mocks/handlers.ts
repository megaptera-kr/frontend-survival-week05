// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import fixtures from '../../fixtures';

// eslint-disable-next-line @typescript-eslint/naming-convention
const BASE_URL = process.env.API_BASE_URL ?? 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, async (req, res, ctx) => {
    const { restaurants } = fixtures;

    return res(
      ctx.status(200),
      ctx.json({ restaurants }),
    );
  }),
  rest.post(`${BASE_URL}/orders`, async (req, res, ctx) => {
    const { receipt } = fixtures;

    return res(
      ctx.status(201),
      ctx.json({ receipt }),
    );
  }),
];

export default handlers;
