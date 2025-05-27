import pg from "pg";

import { USER, PASSWORD, HOST, DATABASE, DB_PORT } from "./config.js";

const { Pool } = pg;
let pool;
if (process.env.NODE_ENV === "production") {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
} else {
  pool = new Pool({});
}
 pool = new pg.Pool({
  user: USER,
  password: PASSWORD,
  host: HOST,
  database: DATABASE,
  port: DB_PORT,
});

export { pool };