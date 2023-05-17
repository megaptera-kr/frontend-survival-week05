// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';

const baseUrl = 'http://localhost:3000';

const handlers = [
  rest.post(`${baseUrl}/orders`, async (req, res, ctx) => {
    const { menu, totalPrice } = await req.json();
    const id = Date.now().toString();
    return res(
      ctx.status(200),
      ctx.json({
        id, menu, totalPrice,
      }),
    );
  }),
];

export default handlers;
