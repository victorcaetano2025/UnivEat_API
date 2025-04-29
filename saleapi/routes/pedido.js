import { Router } from "express";
import client from "../db.js";

const router = Router();

router.get('/pedido', async (req,res)=>{

try {
    const ResulPedido = await client.query("select * from pedido;");
        res.json(ResulPedido.rows);
    
} catch (error) {
    console.error("erro ao buscar pedidos",error);
    res.status(500).json({erro: "salamaleiko nos pedidos" });
}
})

router.post('/pedido', async(req,res)=>{
    
    const {codigo} = req.body;  

try {
    const query ="insert into pedido(codigo) values ($1) RETURNING *"; //returning * pode ser uma mensagem pois retorna o ultimo inserido
    const values = [codigo]
    const insercaopedido = await client.query(query,values)
    res.status(201).json(res.rows[0])//a response que ira para o front ser a res.rows retornada pela query
} catch (error) {
    console.error("erro no post pedidos",error)
    res.status(500).json({erro: "erro no post"})
}

})

export default router;