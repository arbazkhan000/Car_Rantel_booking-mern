import express from 'express';
import { userController } from '../controller/userController.js';
import { AuthMiddleware } from '../middleware/AuthMiddleware.js';



const router = express.Router();

router.post("/create",userController.create);
router.post("/login",userController.login);
router.get("/profile",AuthMiddleware,userController.profile);


export default router;