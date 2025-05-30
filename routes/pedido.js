import { Router } from "express";
import client from "../db.js";

const router = Router();

router.get('/pedido', async (req,res)=>{

try {
    const ResulPedido = await client.query("SELECT p.id, p.cliente, p.status, p.hora, STRING_AGG(c.quantidade_pedido || 'x ' || pr.name, ', ') AS itens, TO_CHAR(SUM(pr.price * c.quantidade_pedido), 'FM9999990.00') AS total FROM pedido p JOIN carrinho c ON p.id = c.pedido JOIN produto pr ON pr.id = c.produto GROUP BY p.id, p.cliente, p.status, p.hora ORDER BY p.id DESC;");
        res.json(ResulPedido.rows);
    
} catch (error) {
    console.error("erro ao buscar pedidos",error);
    res.status(500).json({erro: "nos pedidos" });
}
});

router.get('/pedido/:id', async (req,res)=>{
    const {id} = req.params;
    try {
        const query = "SELECT p.id, pr.name, c.quantidade_pedido FROM carrinho c INNER JOIN produto pr ON c.produto = pr.id INNER JOIN pedido p ON c.pedido = p.id WHERE p.id = $1;";
        const values = [id];
        const ResulPedidoId = await client.query(query,values);
        res.json(ResulPedidoId.rows);
    
} catch (error) {
    console.error("erro ao buscar pedidos",error);
    res.status(500).json({erro: "nos pedidos" });
}
});

router.get('/pedido/histórico',async (req,res)=>{
    try {
        const query = "SELECT * FROM pedido WHERE status = 'entregue'";
    } catch (error) {
        
    }
    
})

router.post('/pedido', async(req,res)=>{
    
    const {cliente,hora} = req.body;  

try {
    await client.query("BEGIN");
    const query ="INSERT INTO pedido (cliente, hora)VALUES ($1, $2) RETURNING *;"; //returning * pode ser uma mensagem pois retorna o ultimo inserido
    const values = [cliente,hora];
    const insercaopedido = await client.query(query,values)
    res.status(201).json(insercaopedido.rows[0]);//a response que ira para o front ser a res.rows retornada pela query
    await client.query("COMMIT");
} catch (error) {
    await client.query("ROLLBACK");
    console.error("erro no post pedidos",error)
    res.status(500).json({erro: "erro no post"})
}

})

router.delete('/pedido/:id', async (req,res)=>{
    const {id} = req.params;
    try {
        const query = "DELETE FROM pedido WHERE id = $1;";
        const values = [id];
        await client.query(query,values);
        res.status(200).json({message: "Pedido deletado com sucesso"});
    } catch (error) {
        console.error("erro ao deletar pedido",error);
        res.status(500).json({erro: "erro ao deletar pedido"});
    }
});

export default router;