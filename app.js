import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./db/connectdb.js";

// import Razorpay from "razorpay";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";

const port = process.env.PORT || '9000'
const DATABASE_URL = process.env.DATABASE_URL|| "mongodb://localhost:27017"

// export const instance = new Razorpay({
//   key_id: process.env.RAZORPAY_API_KEY,
//   key_secret: process.env.RAZORPAY_APT_SECRET,
// });
connectDB(DATABASE_URL)
export  const app = express()
 app.use(cookieParser())
app.use(express.json())
dotenv.config({path:'./config.env'})
app.use(cors())
app.use(express.static('public/uploads/pimage'))
app.use(express.static('public/uploads/rdoc'))
app.use(express.urlencoded({ extended: true }));


app.use('/api', authRoute);
app.use('/api', userRoute);
// app.use('/api', categoryRoute);
// app.use('/api', paymentRoute);
// app.use('/api', cartRoute);
// app.use('/api', detailsRoute);
// app.use('/api', soldRoute);
// app.use('/sms.activesms.in/app/smsapi/index.php?', smsdRoute);
// app.use('sms.activesms.in/app/smsapi/index.php?key=5632EB557E6513&campaign=0&routeid=26&type=text&contacts=9302009469&senderid=SFTWRE&msg=Hello+People%2C+have+a+great+day&template_id= "', smsdRoute)


// app.get('/contact',(req,res) =>{
//      res.cookie('test',"thapa")
//     res.send("set hoja cookies")
// })




//   app.get("/api/getkey", (req, res) =>
//   res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
// );


app.listen(port, ()=>{
    console.log(`local host:${port}`)
});
