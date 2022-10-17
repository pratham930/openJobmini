import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({path:'./config.env'})

import connectDB from "./db/connectdb.js";

// import Razorpay from "razorpay";
import authRoute from "./routes/employee.js";
import userRoute from "./routes/admin.js";

const port = process.env.PORT || '9000'
const DATABASE_URL = process.env.DATABASE_URL|| "mongodb://localhost:27017"

// export const instance = new Razorpay({
//   key_id: process.env.RAZORPAY_API_KEY,
//   key_secret: process.env.RAZORPAY_APT_SECRET,
// });
connectDB(DATABASE_URL)
export  const app = express()
//  app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.use(express.static('public/uploads/pimage'))
app.use(express.static('public/uploads/resume'))
app.use(express.urlencoded({ extended: true }));


app.use('/api', authRoute);
app.use('/api', userRoute);


app.listen(port, ()=>{
    console.log(`local host:${port}`)
});
