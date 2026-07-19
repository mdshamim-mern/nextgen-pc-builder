import express from 'express';
import { AiController } from './ai.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post('/chat', auth('USER', 'ADMIN'), AiController.getChatResponse);

export const AiRoutes = router;