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

export default router;