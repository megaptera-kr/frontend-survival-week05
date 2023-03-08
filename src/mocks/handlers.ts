import { rest } from 'msw';
import { restaurants, orders } from '../fixtures';

const BASE_URL = 'http://localhost:3000';

const handlers = [
    rest.get(`${BASE_URL}/products`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({ restaurants }),
        );
    }),
    rest.get(`${BASE_URL}/orders`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({ orders }),
        );
    }),
    rest.post(`${BASE_URL}/orders`, (req, res, ctx) => {
        const { menu, totalPrice } = req.body as any;

        return res(
            ctx.status(201),
            ctx.json({ id: new Date().getTime(), totalPrice, menu }),
        );
    }),
];

export default handlers;