import pg from "pg";
import {USER, PASSWORD, HOST, DATABASE, DB_PORT} from "./config.js";

export const pool = new pg.Pool({
  user: USER,
  password: PASSWORD,
  host: HOST,
  database: DATABASE,
  port:DB_PORT,
  ssl: process.env.SSL === 'true' ? { rejectUnauthorized: false } : false,
});

