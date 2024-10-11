import { Router } from "express";
import { userList, listUser, verifyUser } from "../users/controllers/user.controller.js"

const router = Router();

router.get('/login', listUser);

router.post('/register', verifyUser);

router.get('/users', userList);

export default router