# Newsletter Service Application

## Description

The Newsletter Service app is a server-side Node.js application built with TypeScript that lets you manage sending SMS newsletters using Twilio. The application checks user subscriptions and sends SMS reminders to users who are not subscribed. It supports PostgreSQL database connections and uses cron jobs for scheduling message dispatch.

## Technologies

- Node.js
- Express.js
- TypeScript
- PostgreSQL (ElephantSQL)
- Twilio API
- node-cron

## Configuration

To run the application, you need to set up environment variables. Create a .env file in the root directory of the project with the following content:

PORT=5000
TWILIO_SID=Your_Twilio_SID
TWILIO_AUTH_TOKEN=Your_Twilio_Auth_Token
TWILIO_PHONE_NUMBER=Your_Twilio_Phone_Number
DB_HOST=Your_Database_Host
DB_PORT=5432
DB_USER=Your_Database_Username
DB_PASSWORD=Your_Database_Password
DB_NAME=Your_Database_Name

### Obtaining Configuration Data

- **Twilio**: Sign up at [Twilio](https://www.twilio.com/) and navigate to the console dashboard to find your SID, Auth Token, and register a phone number.
- **PostgreSQL**: Set up a PostgreSQL database either locally or through a service like [ElephantSQL](https://www.elephantsql.com/), and note down the necessary connection details.

### Example .env for Testing

An additional sample `.env` file can be used for testing purposes. Please note that these are confidential credentials and should not be used in a production environment. Mailgun data is still hidden because the website's regulations prohibit sharing it.

TWILIO_SID=ACe5ae94f48d8024c080bf74ddcf55a2c8
TWILIO_AUTH_TOKEN=31a6f586cfa468787eebfbaca8605e16
TWILIO_PHONE_NUMBER=+17402245733
PORT=5000
DB_HOST=jelani.db.elephantsql.com
DB_PORT=5432
DB_USER=gykjkixa
DB_PASSWORD=jA404fZnIaogvpLv3kMpUmaS7uva2PPy
DB_NAME=gykjkixa

**Important Note**: The above credentials are provided for testing purposes only and should be treated as sensitive information. Do not use these credentials in a production environment.

## Running the Application

### Production Mode

To run the application in production mode, use the command below:

- npm run build
- npm start

### Development Mode

For application development and launch with automatic reload after code changes, use:

- npm run dev

## Features

### Sending SMS Newsletters

The Newsletter Service application sends SMS newsletters to users who are not subscribed. It uses Twilio for sending SMS and node-cron for scheduling daily reminders.

To send SMS, send a POST request to the `/newsletter/send` endpoint. The application will check the subscriptions table to identify users who are not subscribed and send them a reminder message.

Example request:

`http://localhost:5000/newsletter/send`

```{
  "message": "Subscription reminder messages sent."
}
```

# Subscription Management

The application checks user subscriptions stored in the subscriptions table to determine whether to send SMS reminders.

# Daily Reminders

A cron job is set up to run daily at 9 AM Europe/Warsaw time to send subscription reminder messages to users who are not subscribed.

## Author

**Mateusz Wierzbicki**

- [LinkedIn](https://www.linkedin.com/in/mateusz-wierzbicki99/)
- [GitHub](https://github.com/MatWierzbicki)
- Email: m.wierzbicki199@gmail.com
