import { Router } from "express";
import { followOne, getFollowers } from "../followers/controllers/follower.controller.js"

const router = Router();

router.get('/follower', getFollowers);
router.post('/follower', followOne)

export default router;