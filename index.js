import express from 'express';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();
const sequelize = new Sequelize(process.env.PG_URI, {
    dialect: 'postgres',
  });

//test if database is running
sequelize.authenticate()
  .then(() => console.log('Database connected successfully'))
  .catch(err => console.error('Unable to connect to the database:', err));
  
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5678




app.use('/',(req,res) => {

    res.send('Hello from the E-Commerce-Server')
})



app.listen(PORT, ()=> console.log(`Server is running on port:${PORT}`))
