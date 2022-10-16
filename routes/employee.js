

import express from "express";
import employeeController from "../controllers/employee.js";
import authenticate from "../middileware/Authentication.js";
import upload from "../middileware/upload.js"

// router.use('/register', upload.fields([{ name: 'pimage', maxcount: 1 }]));


const router = express.Router();

router.post('/admin/register', employeeController.register);
router.post('/admin/login', employeeController.login);

//patch


// router.patch('/admin/changeUserPassword', authenticate, employeeController.changeUserPassword);
// router.patch('/admin/editProfile', authenticate, employeeController.editProfile);

//get request
router.get('/admin/about', authenticate, employeeController.about);
// router.get('/admin/getjobs', authenticate, employeeController.getjobs);



export default router;