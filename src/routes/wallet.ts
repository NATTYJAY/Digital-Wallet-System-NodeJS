import { Router } from 'express';
import WalletController from '../app/controllers/WalletController';
import { checkJWT } from '../middlewares/checkJWT';

const router = Router();
// User Wallet
router.post('/transferFund', [checkJWT], WalletController.transferFund);
router.post('/fundWallet',[checkJWT], WalletController.fundUserWallet);
router.patch('/withdrawFund',[checkJWT], WalletController.fundWithdrawal);

export default router;
