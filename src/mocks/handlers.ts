// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import fixtures from '../../fixtures';
import Food from '../types/Food';

interface PostReqBody {
  menu: Food[];
  totalPrice: number;
}

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => {
    const { restaurants } = fixtures;

    return res(ctx.status(200), ctx.delay(4000), ctx.json({ restaurants }));
  }),

  rest.post<PostReqBody>(`${BASE_URL}/orders`, (req, res, ctx) => {
    const { menu, totalPrice } = req.body;

    const receipt = {
      id: Date.now().toString(),
      menu,
      totalPrice,
    };

    return res(ctx.status(201), ctx.json({ receipt }));
  }),
];

export default handlers;
