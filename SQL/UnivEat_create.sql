drop table if exists carrinho cascade;
drop table if exists pedido cascade;
drop table if exists produto cascade;
drop table if exists categoria cascade;

CREATE TABLE categoria (
	id_categoria serial PRIMARY KEY,
	category varchar(255)
);

CREATE TABLE produto (
	id serial PRIMARY KEY,
	name varchar(255) UNIQUE NOT NULL,
	description varchar(255),
	price real NOT NULL,
	image text,
	estoque int NOT NULL,
	category int REFERENCES categoria(id_categoria)
);

CREATE TABLE pedido (
	id serial PRIMARY KEY,
	cliente varchar(255),
	status varchar(30) DEFAULT 'pendente',
	hora time
);

CREATE TABLE carrinho (
    pedido INT,
    produto INT,
    quantidade_pedido INT,
    PRIMARY KEY (pedido, produto),
    FOREIGN KEY (pedido) REFERENCES pedido(id),
    FOREIGN KEY (produto) REFERENCES produto(id)
);
