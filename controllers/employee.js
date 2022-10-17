

import bcrypt from "bcryptjs";
import Apllyjob from "../Schema/application.js";
import Registration from "../Schema/admin/singup.js";
// import Postjob from "../Schema/postjob.js";
import PostJob from "../Schema/employee.js";

import jwt from 'jsonwebtoken';


class employeeController {



  static register = async (req, res) => {

    try {
      const { phonenumber, fullname, email, password } = req.body;

      console.log(req.body);
      const userLogin = await Registration.findOne({ phonenumber: phonenumber });
      console.log(userLogin)
      if (userLogin) {
        if (userLogin.phonenumber == phonenumber) {
          console.log(userLogin)
          res.status(201).send({ message: "number already register", status: "failed" })
        }

        if (userLogin.email == email) {
          console.log(userLogin)
          res.status(201).send({ message: " email register", status: "failed" })
        }
      }
      else {
        const lol = { phonenumber, fullname, email, password }
        const register = new Registration(lol)
        await register.save()
        res.status(201).send({ message: "succesfull", status: "success" })
      }
    }
    catch (error) {
      console.log(error)
      return res.status(422).json({ error: "not found data" })
    }
  }


  static about = async (req, res) => {
    console.log(`hello about page`);
    // console.log(req.user.role,"529")
    res.send({ "user": req.user })
  }


  static getjobsByStaffs = async (req, res) => {

    const {_id}  = req.user
     const userLogin = await PostJob.find({jobPostedBy:_id})
     if (userLogin) {
 
       res.send(userLogin)
       console.log(userLogin)
     }
 
   }





  static login = async (req, res) => {

    try {
      const { email, password } = req.body
      console.log(req.body)
      if (!eamil || !password) {
        return res.status(400).json({ message: "pls filled data" })
      }

      const userLogin = await Registration.findOne({ eamil: email });
      if (userLogin) {

        const isMatch = await bcrypt.compare(password, userLogin.password)

        // const token = await userLogin.generateAuthToken();
        const token = jwt.sign({ userID: userLogin._id }, process.env.SECRET_KEY, { expiresIn: '1d' })
        // console.log(token); 
        // res.cookie("jwtoken", token,{
        //     expires:new Date(Date.now() + 2589000000),
        //    httpOnly:true});

        !isMatch ? res.status(400).send({ "status":"failed", message: "number or password wrong" }) : res.send({ "status": "success", "message": "Login Success", "token": token })

      }
      else { res.status(400).send({ message: "filled invalid data"  }) }

    } catch (error) {
      console.log(error);
    }
  };


}

export default employeeController;