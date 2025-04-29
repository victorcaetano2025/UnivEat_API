import dotenv from 'dotenv';
import pg from 'pg';
dotenv.config()
const { Client } = pg

const client = new Client({
    user:     process.env.DB_USER,
    password: process.env.DB_PASS,
    host:     process.env.DB_HOST,
    port:     process.env.DB_PORT,
    database: 'salecafe'
  });
 
client.connect(err => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err.stack);
    } else {
      console.log('Conectado ao banco de dados');
    }
  });
  export default client;