import mongoose from 'mongoose'
import  bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
const { Schema } = mongoose;


const PostJobSchema = new mongoose.Schema({

    jobtitle:{
        type: String,
        required:true
    },
    companyname:{
        type: String,
        required:true
    },
    minimum:{
        type: String,
        
    },
    maximum:{
        type: String,
        
    },
    jobloaction:{
        type: String,
       
    },
    
    hrnumber:{
        type: String,
       
    },
    
    jobdescription:{
        type: String,
       
    },

    // jobPostedBy:[
    //     { type: Schema.Types.ObjectId, ref: 'Registration' },
       
    // ],

    jobPostedBy:{
        type:String,

    }
        
  },
  { timestamps: true}
  
  )


const PostJob = mongoose.model('PostJob', PostJobSchema)


export default PostJob;


