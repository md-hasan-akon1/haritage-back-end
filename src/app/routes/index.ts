import express from 'express';
import { userRoutes } from '../module/users/user.routes';


const router = express.Router();

const moduleRoutes = [
    {
        path: '/user',
        route: userRoutes
    },
   
];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;