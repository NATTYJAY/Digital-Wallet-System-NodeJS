import { Router } from 'express';
import UserController from '../app/controllers/UserController';
import WalletController from '../app/controllers/WalletController';
import {checkJWT} from "../middlewares/checkJWT";
import {checkUser} from "../middlewares/checkUser";

const router = Router();

// users
router.get('/', UserController.listAll);
router.get('/:id', [checkJWT,checkUser], UserController.getByOneId);
router.delete('/:id', [checkJWT,checkUser],UserController.delete);
router.post('/register', UserController.addNew);

export default router;
