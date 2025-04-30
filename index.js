import express from 'express';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5678

app.use('/',(req,res) => {

    app.res('Hello from the E-Commerce-Server')
})



app.listen(PORT, ()=> console.log(`Server is running on port:${PORT}`))
