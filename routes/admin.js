

import express from "express";
import adminController from "../controllers/admin.js";
import authenticate from "../middileware/adminAuthenticate.js";



const router = express.Router();

// router.get('/getjobRole', adminController.getjobRole);
router.post('/admin/register', adminController.register);
router.post('/admin/login', adminController.login);

//patch


router.patch('/admin/changeUserPassword', authenticate, adminController.changeUserPassword);
router.patch('/admin/editProfile', authenticate, adminController.editProfile);

//get request
router.get('/admin/about', authenticate, adminController.about);
router.get('/admin/getjobs', authenticate, adminController.getjobs);



export default router;