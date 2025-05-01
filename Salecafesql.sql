drop table if exists carrinho cascade;
drop table if exists pedido cascade;
drop table if exists produto cascade;
drop table if exists categoria cascade;

create table categoria(
	id_categoria serial primary key,
	tipo varchar(255)
);

create table produto (
	id serial primary key,
	name varchar(255) unique not null,
	description varchar(255),
	price real not null,
	image text,
	quantidade int not null,
	category int references categoria(id_categoria)
);

create table pedido(
	id_pedido serial primary key,
	codigo int unique,
	expirou boolean default false
);

create table carrinho(
	pedido int references pedido(id_pedido),
	produto int references produto(id),
	quantidade_pedido int,
	primary key (pedido, produto)
);

-- Inserção de categorias
INSERT into categoria(id_categoria, tipo)
values (1, 'salgados'), (2, 'bebidas'), (3, 'sobremesas'), (4, 'vitaminas');

-- Inserção de produto
INSERT INTO produto (id, name, description, price, image, quantidade, category)
values (
	14,
	'Água Mineral',
	'Água mineral sem gás. Garrafa 500ml.',
	6.9,
	'https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
	10,
	2
);

-- Inserção de pedidos
insert into pedido(codigo)
values (55512), (141412);

-- Inserção no carrinho
insert into carrinho (pedido, produto, quantidade_pedido)
values (1, 14, 2);

-- Consultas
select * from produto;
select * from pedido;

-- Consulta combinada
select p.codigo, pr.name 
from carrinho
inner join produto pr on carrinho.produto = pr.id
inner join pedido p on carrinho.pedido = p.id_pedido
where p.codigo = 55512;
