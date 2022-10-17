
// import AdminSingup from "../Schema/AdminSingup.js";

import Registration from "../Schema/admin/singup.js";
import bcrypt from "bcryptjs";
// import Apllyjob from "../Schema/custumer.js/aplly.js";

// import Postjob from "../Schema/postjob.js";
import PostJob from "../Schema/employee.js";
import jwt from 'jsonwebtoken';


class adminController {



  static register = async (req, res) => {

    try {
      const { phonenumber, name, email, password } = req.body;

      console.log(req.body);
      const userLogin = await Registration.findOne({ email: email });
      console.log(userLogin, "24")
      if (userLogin) {
        if (userLogin.phonenumber == phonenumber) {
          res.status(201).send({ message: "number already register", status: "failed" })
        }

        if (userLogin.email == email) {
          res.status(201).send({ message: " email register", status: "failed" })
        }
      }
      if (!userLogin) {
        const lol = { phonenumber, name, email, password }
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




  static getjobs = async (req, res) => {

    const userLogin = await PostJob.find()
    if (userLogin) {

      res.send(userLogin)
      console.log(userLogin)
    }

  }




  static login = async (req, res) => {

    try {
      const { email, password } = req.body
      console.log(req.body)
      if (!email || !password) {
        return res.status(400).json({ message: "pls filled data", status: "failed" })
      }

      const userLogin = await Registration.findOne({ email: email });
      if (userLogin) {

        const isMatch = await bcrypt.compare(password, userLogin.password)

        // const token = await userLogin.generateAuthToken();
        const token = jwt.sign({ userID: userLogin._id }, process.env.SECRET_KEY, { expiresIn: '1d' })
        // console.log(token); 
        // res.cookie("jwtoken", token,{
        //     expires:new Date(Date.now() + 2589000000),
        //    httpOnly:true});

        !isMatch ? res.status(400).send({ status: "failed", message: "number or password wrong" }) : res.send({ status: "success", message: "Login Success", "token": token })

      }
      else { res.status(400).send({ message: "filled invalid data" }) }

    } catch (error) {
      console.log(error);
    }
  };





}

export default adminController;