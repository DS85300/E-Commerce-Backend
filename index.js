import express from 'express';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import categoryRouter from './routers/categoryRouter.js';
import userRouter from './routers/UserRouter.js';
import './models/assocations.js';

dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5678;

app.use('/products',productRouter);
app.use('/category',categoryRouter);
app.use('/users',userRouter);





app.listen(PORT, ()=> console.log(`Server is running on port:${PORT}`))
