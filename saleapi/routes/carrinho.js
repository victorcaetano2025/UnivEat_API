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

router.put('/carrinho', async(req,res)=>{
    const{pedido,produto,quantidade} = req.body;
    try {
        const query= "update carrinho set quantidade_pedido = $3 where pedido = $1 and produto = $2 RETURNING *";
        const values = [pedido,produto,quantidade];
        const atualizacarrinho = await client.query(query,values);

        if (atualizacarrinho.rowCount === 0) {
        return res.status(404).json({ mensagem: 'Item do carrinho não encontrado.' });}
        res.status(200).json(atualizacarrinho.rows[0]);

    } catch (error) {
    console.error('Erro ao atualizar carrinho:', error);
    res.status(500).json({ erro: 'Erro interno no servidor.' });
    }

})

export default router;