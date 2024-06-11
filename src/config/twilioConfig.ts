import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const twilioSID = process.env.TWILIO_SID || '';
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN || '';

let client: any;

if (twilioSID.startsWith('AC') && twilioAuthToken) {
  client = twilio(twilioSID, twilioAuthToken);
  console.log('Twilio client initialized');
} else {
  console.warn('Twilio client not initialized. Invalid SID or Auth Token.');
  client = {
    messages: {
      create: async (messageData: any) => {
        console.log('Mock Twilio: Message sent to', messageData.to);
        return Promise.resolve();
      },
    },
  };
}

export default client;
