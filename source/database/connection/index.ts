import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    process.env.POSTGRES_URL!,
    {
        host: process.env.POSTGRES_HOST!,
        dialect: "postgres",
        ssl: true
    }
);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database synchronized');
    })
    .catch((error) => {
        console.error('Failed to synchronize database:', error);
    });

export default sequelize;