import { rest } from 'msw';
import { restaurants, orders } from '../fixtures';
import Food from '../types/Food';

const BASE_URL = 'http://localhost:3000';

const handlers = [
    rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => res(
        ctx.status(200),
        ctx.json({ restaurants }),
    )),
    rest.post<{ totalPrice: number, menu: Food[] }>(`${BASE_URL}/orders`, (req, res, ctx) => {
        const { menu, totalPrice } = req.body;
        const receipt = {
            id: new Date().getTime(),
            totalPrice,
            menu
        };
        return res(
            ctx.status(201),
            ctx.json({ receipt }),
        );
    }),
];

export default handlers;
