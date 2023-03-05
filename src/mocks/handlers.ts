/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';

const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => {
    const restaurants = [
      {
        id: '1',
        category: '중식',
        name: '메가반점',
        menu: [
          { id: '1', name: '짜장면', price: 8000 },
          { id: '2', name: '짬뽕', price: 8000 },
          { id: '3', name: '차돌짬뽕', price: 9000 },
          { id: '4', name: '탕수육', price: 14000 },
        ],
      },
    ];

    return res(
      ctx.status(200),
      ctx.json({ restaurants }),
    );
  }),
  rest.post(`${BASE_URL}/orders`, (req, res, ctx) => {
    const receipt = {
      id: '1677831858885',
      menu: [
        {
          id: '1',
          name: '짜장면',
          price: 8000,
        },
        {
          id: '2',
          name: '짬뽕',
          price: 8000,
        },
        {
          id: '3',
          name: '차돌짬뽕',
          price: 9000,
        },
      ],
      totalPrice: 25000,
    };
    return res(
      ctx.status(200),
      ctx.json({ receipt }),
    );
  }),
];

export default handlers;
