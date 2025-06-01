import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'UnivEat API',
      version: '1.0.0',
      description: 'Documentação da API UnivEat',
    },
  },
  apis: ['./routes/*.js'], // ajuste se suas rotas estiverem em outro local
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
