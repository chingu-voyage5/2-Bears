import { Router } from 'express';
import UserController from '../controller/users';
import OrdersController from '../controller/orders';
// import OrderItemsController from '../controller/order_items';

const router = Router();

router.use('/users', UserController);
// router.use('/orders', OrdersController);
// router.use('/order_items', OrderItemsController);

export default router;
