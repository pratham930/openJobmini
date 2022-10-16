import mongoose from 'mongoose'
import  bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const PostJobSchema = new mongoose.Schema({
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
    work:{
        type: String,
       
    },
    password:{
        type: String,
        required:true
    },
    cpassword:{
        type: String,
        required:true
        
    },
    pimage:{type:String,required:true},
    role: {
        type: String,
         enum: ["user", "admin"],
        default: "user",
      },
  

    friends: [{firstName:{type:String}, lastName:{type:String}}],

   
    adress:[{
        name:{type:String},
        pimage:{type:String},
        locality:{type:String},
        adress:{type:String,required:true},
        landmark:{type:String},
        st:{type:String},
        mobile:{type:String},
        pincode:{type:String}}
       ]
   
})


const PostJob = mongoose.model('PostJob', PostJobSchema)


export default PostJob;


// import mongoose from "mongoose"

// const Schema = new mongoose.Schema({
//     name:{type:String, required:true},
//     email:{type:String,required:true},
//     password:{type:String,required:true},
//     cpassword:{type:String,required:true},
//     mobile:{type:String,required:true},
//     work:{type:String},
    
  
  

// })


// const Registration = mongoose.model('Registration',Schema);


//  export default Registration;
