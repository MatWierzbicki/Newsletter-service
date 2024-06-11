import pkg from 'pg';
import dotenv from 'dotenv';
import { dbMock } from '../database/dbmock.js';

const { Pool } = pkg;
dotenv.config();

let dbPool: any;

const connectToRealDb = async () => {
  const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
  });

  try {
    // Test the connection
    await pool.query('SELECT NOW()');
    console.log('Connected to the real database');
    return pool;
  } catch (error) {
    if (error instanceof Error) {
      console.error(
        'Failed to connect to the real database, using mock database:',
        error.message
      );
    } else {
      console.error(
        'Failed to connect to the real database, using mock database:',
        error
      );
    }
    return dbMock;
  }
};

const initializeDb = async () => {
  dbPool = await connectToRealDb();
};

await initializeDb();

export { dbPool };
