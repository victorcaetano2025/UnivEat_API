import { Router } from "express";
import client from "../db.js";

const router = Router();

router.get('/carrinho', async (req,res)=>{
    try {
        const ResulCarrinho = await client.query("select * from carrinho;");
        res.json(ResulCarrinho.rows);
    } catch (error) {
        console.error("erro ao buscar carrinho",error);
        res.status(500).json({erro: "no carrinho" });
    }
});

router.post('/carrinho', async(req,res)=>{
   const{pedido, itens} = req.body;
    try {
        await client.query("BEGIN");
        for (const item of itens) {
            const query = `INSERT INTO carrinho (pedido, produto, quantidade_pedido) VALUES ($1, $2, $3) ON CONFLICT (pedido, produto) DO UPDATE SET quantidade_pedido = EXCLUDED.quantidade_pedido`;
            const values = [pedido, item.produto, item.quantidade];
            await client.query(query, values);
        }
        await client.query("COMMIT");
        res.status(200).json({message: "Inserido no carrinho com sucesso"});
    } catch (error) {
        await client.query("ROLLBACK");
        console.error("Erro ao inserir carrinho", error);
        res.status(500).json({error: "Erro ao Inserir carrinho"});
    } 
});


export default router;