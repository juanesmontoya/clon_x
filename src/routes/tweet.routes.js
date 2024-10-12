import { Router } from "express";
import { getTweets, saveTweet, getTweet, deleteTweet } from "../tweets/controllers/tweet.controller.js"
import { authRequired } from "../users/middlewares/validateToken.js";

const router = Router();

router.get('/tweet', authRequired, getTweets);
router.get('/tweet/:username', authRequired, getTweet);
router.post('/tweet', authRequired, saveTweet);
router.delete('/tweet', authRequired, deleteTweet);

export default router