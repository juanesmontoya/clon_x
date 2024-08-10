import { Router } from "express";
import { getFollowers, followOne } from "../controllers/follower.controller.js"

const router = Router();

router.get('/follower', getFollowers);

router.post('/follower', followOne);

export default router