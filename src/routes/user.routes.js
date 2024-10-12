import { Router } from "express";
import { logoutUser, loginUser, register, profile } from "../users/controllers/user.controller.js";
import { authRequired } from "../users/middlewares/validateToken.js";

const router = Router();

router.post('/login', loginUser);

router.post('/logout', logoutUser);

router.post('/register', register);

router.get('/profile', authRequired, profile);

export default router;