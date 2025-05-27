import fs from 'fs';
import path from 'path';
import pool from './db.js';

const __dirname = path.resolve();

const initDB = async () => {
  try {
    const filePath = path.join(__dirname, 'src', 'migrations', 'init.sql');
    const sql = fs.readFileSync(filePath).toString();
    await pool.query(sql);
    console.log('Tablas verificadas o creadas');
  } catch (error) {
    console.error('Error al inicializar la base de datos:', error);
  }
};

export default initDB;
