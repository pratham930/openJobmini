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
         enum: ["employee", "admin"],
        default: "employee",
      },
  


   
    // adress:[{
    //     name:{type:String},
    //     pimage:{type:String},
    //     locality:{type:String},
    //     adress:{type:String,required:true},
    //     landmark:{type:String},
    //     st:{type:String},
    //     mobile:{type:String},
    //     pincode:{type:String}}
    //    ]
 
})

singupSchema.pre('save',async function (next){
 console.log("hii pre");
    if (this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12)
        this.confrimPassword = await bcrypt.hash(this.password,12)
    }
    next();
})

// we are genrating token

// Schema.methods.generateAuthToken = async function() {

//     try {
//         let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY);

//         this.tokens = this.tokens.concat({token: token})
        
//         await this.save();
//         return token;
//     } catch (error) {
//         console.log(error);
//     }
// }

const Registration = mongoose.model('Registration', singupSchema)


export default Registration;


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
