import { Request, Response, NextFunction } from 'express';
import { sendSubscriptionReminder } from '../services/newsletterService.js';

export const sendNewsletterController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await sendSubscriptionReminder();
    res.status(200).json({ message: 'Subscription reminder messages sent.' });
  } catch (error) {
    next(error);
  }
};
