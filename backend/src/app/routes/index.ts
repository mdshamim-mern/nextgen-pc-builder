import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { ComponentRoutes } from '../modules/Component/component.route';
import { OrderRoutes } from '../modules/Order/order.route';
import { AiRoutes } from '../modules/AI_Assistant/ai.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/components',
    route: ComponentRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
  {
    path: '/ai',
    route: AiRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;