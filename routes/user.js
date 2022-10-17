// router.use('/register', upload.fields([{ name: 'pimage', maxcount: 1 }]));


import express from "express";
import userController from "../controllers/employee.js";
import authenticate from "../middileware/Authentication.js";
import upload from "../middileware/upload.js"
import middile from '../middileware/requier.js';

router.use('/ApllyJob', upload.fields([{ name: 'pimage', maxcount: 1 }]));


const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);

//patch



//get request
router.get('/about', authenticate,middile.staff, userController.about);
// router.get('/getjobsByStaffs', authenticate,middile.staff, userController.getjobsByStaffs);
router.post('/ApllyJob', userController.ApllyJob);



// router.get('/admin/getjobs', authenticate, userController.getjobs);



export default router;