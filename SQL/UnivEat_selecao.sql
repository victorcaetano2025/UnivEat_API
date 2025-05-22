-- Consultas
	select * from produto;
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

-- select para pedico com seu items
	select p.id from pedido p where id
	inner join carrinho c on p.id = c.pedido;