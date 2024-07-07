import { Router } from 'express';
import { UserRoutes } from './route/user.route';

const router = Router();

const apiRoutes = [
  {
    path: 'auth/signUp',
    route: UserRoutes,
  },
];

apiRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
