import { rest } from "msw";
import fixtures from "../fixtures";
import Food from "../types/Food";

const BASE_URL = "http://localhost:3000";

interface PostReqBody {
  menu: Food[];
  totalPrice: number;
}

const handlers = [
  rest.get(`${BASE_URL}/restaurants`, (req, res, ctx) => {
    const { restaurants } = fixtures;

    return res(ctx.json({ restaurants }));
  }),

  rest.post(`${BASE_URL}/orders`, async (req, res, ctx) => {
    const { menu, totalPrice } = (await req.json()) as PostReqBody;
    const receipt = { id: Date.now().toString(), menu, totalPrice };

    return res(ctx.json({ receipt }));
  }),
];

export default handlers;
