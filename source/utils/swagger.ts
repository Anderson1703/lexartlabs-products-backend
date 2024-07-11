export const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API Information',
        },
        servers: [
            {
                url: 'http://localhost:8080/api',
                description: 'Development server',
            },
        ],
    },
    apis: ['./source/routes/*.ts'], 
};