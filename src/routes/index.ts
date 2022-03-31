import { Request, Response, Router } from 'express';
import user from './user';
import auth from './auth';
import wallet from './wallet';
const routes = Router();

routes.use('/v1/user', user);

routes.use('/v1/login',auth);

routes.use('/v1/wallet',wallet);

export { routes };
