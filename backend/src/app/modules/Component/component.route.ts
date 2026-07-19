import express from 'express';
import { ComponentController } from './component.controller';

const router = express.Router();

router.post('/', ComponentController.createComponent);
router.get('/', ComponentController.getAllComponents);

export const ComponentRoutes = router;