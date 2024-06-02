import { Router } from 'express';
const router = Router();

import userRouter from './user';

router.get('/healthCheck', (__, res) => {
  res.status(200).send({
    message: 'OK',
    uptime: process.uptime()
  });
});

router.use(userRouter);

export default router;
