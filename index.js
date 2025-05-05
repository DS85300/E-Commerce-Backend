import express from 'express';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5678

app.use('/',(req,res) => {

    res.send('Hello from the E-Commerce-Server')
})



app.listen(PORT, ()=> console.log(`Server is running on port:${PORT}`))
