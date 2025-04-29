
drop table if exists produto cascade;
drop table if exists pedido cascade;
drop table if exists carrinho cascade;
create table produto (
Id_produto serial primary key,
nome varchar(255) unique not null,
valor real not null,
quantidade int not null,
url_descricao varchar(255),
url_img varchar(255)
);
create table pedido(
id_pedido serial primary key,
codigo int unique,
expirou boolean default false
);
create table carrinho(
pedido int references pedido(Id_pedido),
produto int references produto(id_produto),
quantidade_pedido int,
primary key (pedido,produto,quantidade_pedido)
);

insert into produto(nome,valor,quantidade) 
values  ('salgado', 5.0, 10),
		('esfirra', 8.0, 7),
		('hamburguer', 9.0, 12);

insert into pedido(codigo)
values  (55512),
		(141412);

insert into carrinho (pedido,produto,quantidade_pedido)
values(1,1,2),(1,2,1),(2,1,3);


select * from produto;
select * from pedido;

select p.codigo, pr.nome from carrinho
inner join produto pr on produto = pr.id_produto
inner join pedido p on pedido = p.id_pedido
where p.codigo = 55512;