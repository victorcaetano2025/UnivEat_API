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
})

router.post('/carrinho', async(req,res)=>{
    
    const {pedido,produto,quantidade} = req.body;  

    try {
        const query ="insert into carrinho(pedido,produto,quantidade_pedido) values ($1,$2,$3) RETURNING *"; //returning * pode ser uma mensagem pois retorna o ultimo inserido
        const values = [pedido,produto,quantidade]
        const insercaocarrinho = await client.query(query,values)
        res.status(201).json(insercaocarrinho.rows[0]);//a response que ira para o front ser a res.rows retornada pela query
    } catch (error) {
        console.error("erro no post carrinho",error)
        res.status(500).json({erro: "erro no post"})
    }

})

router.put('/carrinho/pedidos', async(req,res)=>{
    const{pedido, itens} = req.body;
    const clientPg = await client.connect();

    try {
        await clientPg.query("BEGIN");
        for (const item of itens) {
            const query = "INSERT INTO carrinho (pedido, produto, quantidade_pedido) VALUES ($1, $2, $3) ON CONFLICT (pedido, produto) DO UPDATE SET quantidade_pedido = EXCLUDED.quantidade_pedido";
            const values = [pedido, item.produto, item.quantidade];
            await clientPg.query(query, values);
        }
        await clientPg.query("COMMIT");
        res.status(200).json({message: "Carrinho atualizado com sucesso"});
    } catch (error) {
        await clientPg.query("ROLLBACK");
        console.error("Erro ao atualizar carrinho", error);
        res.status(500).json({error: "Erro ao atualizar carrinho"});
    } finally {
        clientPg.release();
    }

});

export default router;