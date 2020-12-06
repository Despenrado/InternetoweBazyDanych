import dotenv from 'dotenv';
dotenv.config();
module.exports = {
  url: process.env.URL,
  port: process.env.PORT,
  db: {
      port: process.env.DB_PORT,
      pass: process.env.DB_PASS,
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      host: process.env.DB_HOST,
      database: process.env.DB_DATABSE,
      limit: process.env.DB_LIMIT,
  },
  secret: process.env.JWT_SECRET
};