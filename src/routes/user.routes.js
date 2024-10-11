import { Router } from "express";
import { userList, searchUser, createUser } from "../users/controllers/user.controller.js"

const router = Router();

router.get('/login', searchUser);

router.post('/register', createUser);

router.get('/users', userList);

export default router