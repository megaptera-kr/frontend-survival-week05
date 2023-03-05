// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';
import fixtures from '../fixtures';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => {
    const { restaurants } = fixtures;

    return res(
      ctx.status(200),
      ctx.json({ restaurants }),
    );
  }),
  rest.post(`${BASE_URL}/orders`, (req, res, ctx) => {
    const receipt = {
      id: '1',
      menu: [
        { id: '1', name: '짜장면', price: 8000 },
      ],
      totalPrice: 1000,
    };

    return res(
      ctx.status(200),
      ctx.json({ receipt }),
    );
  }),
];

export default handlers;
