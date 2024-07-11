export const swaggerOptions = {
     swaggerDefinition: {
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API Information',
        }
    },
    apis: [`${__dirname}/routes/*.ts`],
};