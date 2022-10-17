

import express from "express";
import employeeController from "../controllers/employee.js";
import authenticate from "../middileware/Authentication.js";
import upload from "../middileware/upload.js"
import middile from '../middileware/requier.js';

// router.use('/register', upload.fields([{ name: 'pimage', maxcount: 1 }]));


const router = express.Router();

router.post('/register', employeeController.register);
router.post('/login', employeeController.login);

//patch


// router.patch('/admin/changeUserPassword', authenticate, employeeController.changeUserPassword);
// router.patch('/admin/editProfile', authenticate, employeeController.editProfile);

//get request
router.get('/about', authenticate,middile.staff, employeeController.about);
router.get('/getjobsByStaffs', authenticate,middile.staff, employeeController.getjobsByStaffs);



// router.get('/admin/getjobs', authenticate, employeeController.getjobs);



export default router;