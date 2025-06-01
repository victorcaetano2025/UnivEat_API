# Passos para utilizar api UnivEat
## requisitos.
- `node` pode ser mais atual 
- `postgres` pode ser mais atual 

## configurando a api
crie na raiz da pasta um arquivo .env e configure como esta abaixo
- DB_PORT= sua_porta
- DB_HOST= seu_host ou localhost
- DB_USER= seu_user
- DB_PASS= sua_senha

## instale as dependencias
rode no terminal: `npm install` instalara as dependencias da api

## Banco de Dados
para criar o DB voce tem duas opções Pasta/SQL ou script.js.
- via pasta / crie um database chamado `univeat`
  - copie e cole ou abra o conteudo do UnivEat_create.sql no editor de Bando de dados e execute.
- via script / rode no terminal: `node criadb.js`  !!! em desenvolvimento

## inicializar
rode no terminal: `node server.js`
assim que mostrar 
- `Conectado ao banco de dados` OK Banco de dados
- `Example app listening on port 3001` OK porta para localhost
