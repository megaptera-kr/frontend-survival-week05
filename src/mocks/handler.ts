/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';

import fixtures from '../../fixtures';

const BASE_URL = 'http://localhost:3000';

const handler = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => {
    const { restaurants } = fixtures;

    return res(ctx.status(200), ctx.json({ restaurants }));
  }),
];

export default handler;
