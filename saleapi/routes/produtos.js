import { Router } from "express";
import client from "../db.js";

const router = Router();

router.get('/produtos', async (req,res)=>{

    try {
        const ResulProduto = await client.query("select * from produto;");
            res.json(ResulProduto.rows);
    } catch (error) {
        console.error("erro ao buscar produtos",error);
        res.status(500).json({ erro: "Erro ao buscar produtos" });
    }
})

router.post('/produtos', async(req,res)=>{

    const {name,description,price,image,category,quantidade} = req.body;//campos que vão ser inseridos vendos do post/sera referente as colunas do produtos

    try {
        const query = "insert into produto(name,description,price,image,category,quantidade) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
        const values = [name,description,price,image,category,quantidade]; // recebe a const dos req.body    
        const insercaoProduto = await client.query(query,values)
        res.status(201).json(insercaoProduto.rows[0]);
        
    } catch (error) {
        console.error("erro ao inserir produto",error);
        res.status(500).json({erro:"Erro ao inserir produto"})
    }
})

export default router;
