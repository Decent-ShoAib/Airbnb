import express from 'express';
import dotenv from 'dotenv'
import connectDb from './config/db.js';
import authRouter from './routes/authRoute.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRouter from './routes/userRoute.js';
import listingRouter from './routes/listingRoute.js';
dotenv.config()
const app = express();

let port = process.env.PORT || 8080;

app.use(cors({
    origin: "https://airbnb-shoaib.vercel.app",
    credentials: true,
}))
app.use(express.json());
app.use(cookieParser());
app.get('/', (req, res)=>{
    res.send('server start')
})
app.use('/api/auth/', authRouter)
app.use('/api/user/', userRouter)
app.use('/api/listing/', listingRouter)

app.listen(port, () => {
    connectDb();
    console.log(`server is runnig ${port}`);
})