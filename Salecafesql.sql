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
	pedido int REFERENCES pedido(id),
	produto int REFERENCES produto(id),
	quantidade_pedido int,
	PRIMARY KEY (pedido, produto)
);


-- Inserção de categorias
INSERT into categoria(id_categoria, category)
values (1, 'salgados'), (2, 'bebidas'), (3, 'sobremesas'), (4, 'vitaminas');

-- Inserção de produto
INSERT INTO produto (id, name, description, price, image, estoque, category)
values (
	14,'Água Mineral', 'Água mineral sem gás. Garrafa 500ml.',
	6.9,
	'https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
	10,	2
),(
	13, 'Gatorade', 'Suco de frutas frescas. Contendo gás e taurina.',
    14.9,
   	'https://images.pexels.com/photos/18925017/pexels-photo-18925017/free-photo-of-beverages-in-fridge-in-store.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
   	25,	2
);

-- Inserção de pedidos (hora fica HH:MM:SS FrontEnd vai se adequar)
INSERT INTO pedido (cliente, hora)
VALUES ('victor', '18:11:32'), ('pedro', '18:12:20');

-- Inserção no carrinho
insert into carrinho (pedido, produto, quantidade_pedido)
values (1, 14, 2),(1,13,1),(2, 14, 3);

-- Consultas
	select * from produto;
	select * from pedido;
	select * from categoria;
	select * from carrinho;

-- get para pedidos FrontEnd
SELECT p.id, p.cliente, p.status, p.hora,
  STRING_AGG(c.quantidade_pedido || 'x ' || pr.name, ', ') AS itens,
  TO_CHAR(SUM(pr.price * c.quantidade_pedido), 'FM9999990.00') AS total
FROM pedido p
JOIN carrinho c ON p.id = c.pedido
JOIN produto pr ON pr.id = c.produto
GROUP BY p.id, p.cliente, p.status, p.hora
ORDER BY p.id DESC;


-- Consulta listado os itens dos pedido
	SELECT p.id, pr.name, c.quantidade_pedido
	FROM carrinho c
	INNER JOIN produto pr ON c.produto = pr.id
	INNER JOIN pedido p ON c.pedido = p.id;

-- select produtos OK
	select p.id, p.name, p.description, p.price, p.image, p.estoque, c.category from produto p
	inner join categoria c on p.category = c.id_categoria;
