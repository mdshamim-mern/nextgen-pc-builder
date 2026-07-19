import express from 'express';
import { OrderController } from './order.controller';
import auth from '../../middlewares/auth';

const router = express.Router();
router.post('/', auth('USER'), OrderController.createOrder);

export const OrderRoutes = router;