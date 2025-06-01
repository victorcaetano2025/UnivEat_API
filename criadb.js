import pkg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Client } = pkg;

const dbName = "univeat";
 
// Conecta ao banco padrão (postgres)
const rootClient = new Client({
  user:     process.env.DB_USER,
  host:     process.env.DB_HOST,
  database: 'postgres',
  password: process.env.DB_PASS,
  port:     process.env.DB_PORT,
});

const checkOrCreateDatabase = async () => {
  try {
    await rootClient.connect();

    // Verifica se o banco existe
    const res = await rootClient.query(
      'SELECT 1 FROM pg_database WHERE datname = $1',
      [dbName]
    );
let sinal = false
    if (res.rowCount === 0) {
      // Cria o banco se não existir
      await rootClient.query(`CREATE DATABASE "${dbName}"`);
      console.log(`Banco "${dbName}" criado.`);
      sinal = true;
    } else {
        const resul =await rootClient.query(` SELECT tablename
      FROM pg_catalog.pg_tables
      WHERE schemaname = 'public';`)
      if (res.rowCount === 0) {
          sinal = true;}
      console.log(`Banco "${dbName}" já existe.`);
    }

    if(sinal){ // se criar banco cria as tabelas
    await rootClient.end();

    // Agora conecta ao banco criado para criar tabelas
    const dbClient = new Client({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: dbName,
      password: process.env.DB_PASS,
      port: Number(process.env.DB_PORT),
    });

    await dbClient.connect();

    // Criação das tabelas
    await dbClient.query(`
CREATE TABLE categoria (
	id_categoria serial PRIMARY KEY,
	category varchar(255)
);
    `);

    await dbClient.query(`
CREATE TABLE produto (
	id serial PRIMARY KEY,
	name varchar(255) UNIQUE NOT NULL,
	description varchar(255),
	price real NOT NULL,
	image text,
	estoque int NOT NULL,
	category int REFERENCES categoria(id_categoria)
);      
    `);

await dbClient.query(`
CREATE TABLE pedido (
	id serial PRIMARY KEY,
	cliente varchar(255),
	status varchar(30) DEFAULT 'pendente',
	hora time
);
    `);

await dbClient.query(`
CREATE TABLE carrinho (
    pedido INT,
    produto INT,
    quantidade_pedido INT,
    PRIMARY KEY (pedido, produto),
    FOREIGN KEY (pedido) REFERENCES pedido(id),
    FOREIGN KEY (produto) REFERENCES produto(id)
);
    `);

    await dbClient.end();
    console.log('Tabelas criadas com sucesso.');
};
  } catch (err) {
    console.error('Erro:', err);
    process.exit(1);
  }
};

checkOrCreateDatabase();
