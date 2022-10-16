import mongoose from 'mongoose'
import  bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const PostJobSchema = new mongoose.Schema({

    jobtitle:{
        type: String,
        required:true
    },
    companyname:{
        type: String,
        required:true
    },
    sallery:{
        type: String,
        
    },
    loaction:{
        type: String,
       
    },
    
    HrNumber:{
        type: String,
       
    },
    
    jobdetails:{
        type: String,
       
    },
    // role: {
    //     type: String,
    //      enum: ["user", "admin"],
    //     default: "user",
    //   },
  })


const PostJob = mongoose.model('PostJob', PostJobSchema)


export default PostJob;


