import express from 'express';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import productRouter from './routers/productRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5678;

app.use('/products',productRouter);




app.listen(PORT, ()=> console.log(`Server is running on port:${PORT}`))
