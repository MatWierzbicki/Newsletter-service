import client from '../config/twilioConfig.js';
import { dbPool } from '../database/database.js';

export const sendSubscriptionReminder = async () => {
  try {
    const { rows: users } = await dbPool.query(
      `SELECT DISTINCT e.userid, e.phonenumber 
       FROM events e`
    );

    for (const user of users) {
      try {
        const { rows: subscription } = await dbPool.query(
          `SELECT s.optedin 
           FROM subscriptions s
           WHERE s.userid = $1`,
          [user.userid]
        );

        if (subscription.length === 0 || subscription[0].optedin === false) {
          await client.messages.create({
            to: user.phonenumber,
            from: process.env.TWILIO_PHONE_NUMBER,
            body: 'We encourage you to subscribe, which allows you to send unlimited SMS!',
          });
          console.log(`Sent message to ${user.phonenumber}`);

          await dbPool.query(
            `INSERT INTO newsletter_logs (userid, phonenumber, message) VALUES ($1, $2, $3)`,
            [
              user.userid,
              user.phonenumber,
              'We encourage you to subscribe, which allows you to send unlimited SMS!',
            ]
          );
        }
      } catch (error) {
        console.error(
          `Error sending message to ${user.phonenumber}: ${
            error instanceof Error ? error.message : error
          }`
        );
      }
    }
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};
