import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRouter from './routes/userRoutes.js';
dotenv.config();



const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: false }));



app.get("/", (req, res) => {
    res.json({ message: "Server is running" })
})

// Routes
app.use('/api/user', userRouter)


const PORT = process.env.PORT || 7000;


app.listen(PORT, () => {
    console.log(`Server is listing at ${PORT}`)
})


connectDB();