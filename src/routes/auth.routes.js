import { Router } from "express";
import { userList } from "../controllers/user.controller.js"

const router = Router();

//router.get('/register');
//router.post('/register');

router.get('/login', userList);
//router.post('login');

export default router