import mysql from 'mysql2';
import {Db, DB_host, DB_user, DB_pass, DB_limit} from '../config.js'

const pool = mysql.createPool({
    host: DB_host,
    database: Db,
    user: DB_user,
    password: DB_pass,
    connectionLimit: DB_limit,
    ssl: {
        rejectUnauthorized: false
    }
});

export default pool;