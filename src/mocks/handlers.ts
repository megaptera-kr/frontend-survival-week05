// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import fixtures from '../../fixtures';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => {
    const { restaurants } = fixtures;
    return res(ctx.status(200), ctx.json({ restaurants }));
  }),
  rest.post(`${BASE_URL}/orders`, async (req, res, ctx) => {
    const { menu, totalPrice } = await req.json();
    const receipt = {
      id: Date.now().toString(),
      menu,
      totalPrice,
    };
    return res(ctx.status(200), ctx.json({ receipt }));
  }),
];

export default handlers;
