import { Router } from "express";
import client from "../db.js";

const router = Router();

router.get('/produtos', async (req,res)=>{

    try {
        const ResulProduto = await client.query("select p.id, p.name, p.description, p.price, p.image, p.estoque, c.category from produto p inner join categoria c on p.category = c.id_categoria;");
            res.json(ResulProduto.rows);
    } catch (error) {
        console.error("erro ao buscar produtos",error);
        res.status(500).json({ erro: "Erro ao buscar produtos" });
    }
});

router.post('/produtos', async(req,res)=>{

    const {name,description,price,image,quantidade,category} = req.body;//campos que vão ser inseridos vendos do post/sera referente as colunas do produtos

    try {
        await client.query("BEGIN");
        const query = "INSERT INTO produto (name, description, price, image, quantidade, category) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
        const values = [name,description,price,image,quantidade,category]; // recebe a const dos req.body    
        const insercaoProduto = await client.query(query,values)
        res.status(201).json(insercaoProduto.rows[0]);
        await client.query("COMMIT");
        
    } catch (error) {
        await client.query("ROLLBACK");
        console.error("erro ao inserir produto",error);
        res.status(500).json({erro:"Erro ao inserir produto"})
    }
});

export default router;
