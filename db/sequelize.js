import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.PG_URI, {
    dialect: 'postgres',
  });

  //test if database is running
  sequelize.authenticate()
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Unable to connect to the database:', err));

export default sequelize;
