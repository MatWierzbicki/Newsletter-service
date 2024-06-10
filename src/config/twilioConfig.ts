import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const twilioSID = process.env.TWILIO_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;

const client = twilio(twilioSID, twilioAuthToken);

export default client;
