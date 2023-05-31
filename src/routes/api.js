import { Router } from 'express';
import { validKey } from '../middlewares/bot.middlewares';

const router = Router();

//router.use(validKey);
router.use('/bots', require('./bots.routes'));
router.use('/phones', require('./phones.routes'));

module.exports = router; 