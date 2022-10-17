

import express from "express";
import adminController from "../controllers/admin.js";
import authenticate from "../middileware/Authentication.js";
import middile from '../middileware/requier.js';



const router = express.Router();

// router.get('/getjobRole', adminController.getjobRole);
router.post('/admin/register', adminController.register);
router.post('/admin/login', adminController.login);

//patch


// router.patch('/admin/changeUserPassword', authenticate, adminController.changeUserPassword);
// router.patch('/admin/editProfile', authenticate, adminController.editProfile);

//get request
router.get('/admin/about', authenticate, middile.admin, adminController.about);
router.get('/admin/getjobs', authenticate, middile.admin, adminController.getjobs);



export default router;