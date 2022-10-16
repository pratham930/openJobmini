import mongoose from 'mongoose'
import  bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const singupSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    mobile:{
        type: String,
        
    },
   
    password:{
        type: String,
        required:true
    },

    // pimage:{type:String,required:true},
    role: {
        type: String,
         enum: ["staff", "admin"],
        default: "staff",
      },
  


   
    
 
})

singupSchema.pre('save',async function (next){
 console.log("hii pre");
    if (this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12)
        this.confrimPassword = await bcrypt.hash(this.password,12)
    }
    next();
})



const Registration = mongoose.model('Registration', singupSchema)


export default Registration;


