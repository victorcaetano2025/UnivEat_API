import express, { json } from 'express';
import pedidos from './routes/pedido.js';
import produto from './routes/produtos.js';
import carrrinho from './routes/carrinho.js';
import path from 'path';
import { fileURLToPath } from 'url';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const swaggerDocument = YAML.load(path.join(__dirname, 'docs', 'swagger.yml'));

const app = express();
const port = 3001;

app.use(json());
app.use('/api', produto);
app.use('/api', pedidos);
app.use('/api', carrrinho);

// Rota de documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log(`Swagger disponível em http://localhost:${port}/api-docs`);
});
