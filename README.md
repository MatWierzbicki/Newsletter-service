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

- PORT=5000
- TWILIO_SID=Your_Twilio_SID
- TWILIO_AUTH_TOKEN=Your_Twilio_Auth_Token
- TWILIO_PHONE_NUMBER=Your_Twilio_Phone_Number
- DB_HOST=Your_Database_Host
- DB_PORT=5432
- DB_USER=Your_Database_Username
- DB_PASSWORD=Your_Database_Password
- DB_NAME=Your_Database_Name

### Obtaining Configuration Data

- **Twilio**: Sign up at [Twilio](https://www.twilio.com/) and navigate to the console dashboard to find your SID, Auth Token, and register a phone number.
- **PostgreSQL**: Set up a PostgreSQL database either locally or through a service like [ElephantSQL](https://www.elephantsql.com/), and note down the necessary connection details.

## Running the Application

### Production Mode

To run the application in production mode, use the command below:

- npm run build
- npm start

### Development Mode

For application development and launch with automatic reload after code changes, use:

- npm run dev

## Database Configuration and Fallback

The application requires a connection to a PostgreSQL database to operate fully. However, if the database is not configured or the connection fails, the application will use mock data. This allows you to test and develop the application without needing a fully set up database.

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

The application checks user subscriptions stored in the subscriptions table to determine whether to send SMS reminders.
A cron job is set up to run daily at 9 AM Europe/Warsaw time to send subscription reminder messages to users who are not subscribed.

## Author

**Mateusz Wierzbicki**

- [LinkedIn](https://www.linkedin.com/in/mateusz-wierzbicki99/)
- [GitHub](https://github.com/MatWierzbicki)
- Email: m.wierzbicki199@gmail.com
