import { rest } from 'msw';

import type { OrderRequest } from '../types/cart';
import { restaurants } from '../../fixtures';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => res(
    ctx.status(200),
    ctx.json({ restaurants }),
  )),

  rest.post<OrderRequest>(`${BASE_URL}/orders`, (req, res, ctx) => {
    const { menu, totalPrice } = req.body;

    const receipt = {
      id: Date.now().toString(),
      menu,
      totalPrice,
    };

    return res(ctx.status(200), ctx.json(receipt));
  }),
];

export default handlers;
