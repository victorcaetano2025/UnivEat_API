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
    
    const {codigo} = req.body;  

    try {
        const query ="insert into carrinho(codigo) values ($1) RETURNING *"; //returning * pode ser uma mensagem pois retorna o ultimo inserido
        const values = [codigo]
        const insercaocarrinho = await client.query(query,values)
        res.status(201).json(insercaocarrinho.rows[0]);//a response que ira para o front ser a res.rows retornada pela query
    } catch (error) {
        console.error("erro no post carrinho",error)
        res.status(500).json({erro: "erro no post"})
    }

})

export default router;