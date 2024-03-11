import { Express, Request, Response } from 'express';

import OrderType from '../types/OrderType';
import OrderResponseType from '../types/OrderResponseType';

function OrderController(app: Express) {
  app.post('/orders', (req: Request<OrderType>, res: Response) => {
    const order: OrderType = req.body;
    const orderId = Date.now().toString();
    const response: OrderResponseType = {
      id: orderId,
      menu: order.menu,
      totalPrice: order.totalPrice,
    };

    res.status(201).send(response);
  });
}

export default OrderController;
