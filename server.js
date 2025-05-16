import express, { json } from 'express';

import pedidos from './routes/pedido.js';
import produto from './routes/produtos.js';
import carrrinho from './routes/carrinho.js';


const app = express();
const port = 3001;
  
app.use(json())
app.use('/api',produto);
app.use('/api',pedidos);
app.use('/api',carrrinho);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})