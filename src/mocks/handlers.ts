/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';

import fixtures from '../fixtures';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => res(ctx.status(200), ctx.json({ restaurants: fixtures.restaurants }))),

  rest.post(`${BASE_URL}/orders`, async (req, res, ctx) => {
    const { menu, totalPrice } = await req.json();

    const receiptId = new Date().getTime();

    return res(
      ctx.status(201),
      ctx.json({
        receipt: {
          id: receiptId,
          menu,
          totalPrice,
        },
      }),
    );
  }),
];

export default handlers;
