import { Router } from 'express';
import { sendNewsletterController } from '../controllers/newsletterController.js';
const router = Router();

router.post('/send', sendNewsletterController);

export default router;
