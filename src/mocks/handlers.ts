// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import fixtures from '../../fixtures';

const handlers = [
  rest.get('http://localhost:3000/restaurants', (req, res, ctx) => {
    const { restaurants } = fixtures;
    return res(
      ctx.status(200), // 안써도 기본이 200
      ctx.json({ restaurants }),
    );
  }),
  rest.post('http://localhost:3000/orders', async (req, res, ctx) => {
    const { menu, totalPrice } = await req.json();
    const receiptId = new Date().getTime();
    return res(
      ctx.status(201),
      ctx.json({ id: receiptId, menu, totalPrice }),
    );
  }),
];
export default handlers;
