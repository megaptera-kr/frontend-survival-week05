/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';

import fixtures from '../fixtures';

import Food from '../types/Food';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => res(ctx.status(200), ctx.json({ restaurants: fixtures.restaurants }))),

  rest.post(`${BASE_URL}/orders`, (req, res, ctx) => {
    const { menu, totalPrice } = req.body as { menu: Food; totalPrice: number };

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
