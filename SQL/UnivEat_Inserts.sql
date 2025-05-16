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