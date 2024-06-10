import express from 'express';
import dotenv from 'dotenv';
import newsletterRoutes from './routes/newsletterRoutes.js';
import errorHandler from './middleware/errorHandler.js';
import { dbPool } from './database/database.js';

dotenv.config();

const app = express();
app.use(express.json());

(async () => {
  const cron = await import('node-cron');
  const { sendSubscriptionReminder } = await import(
    './services/newsletterService.js'
  );

  dbPool
    .connect()
    .then(() => {
      console.log('Connected to the database');

      app.use('/newsletter', newsletterRoutes);
      app.use(errorHandler);

      cron.schedule(
        '0 9 * * *',
        async () => {
          console.log('Running daily newsletter job');
          await sendSubscriptionReminder();
        },
        {
          scheduled: true,
          timezone: 'Europe/Warsaw',
        }
      );

      const PORT = process.env.PORT || 5000;
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    })
    .catch(err => {
      console.error('Database connection failed', err);
    });
})();
