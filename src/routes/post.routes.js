import { Router } from "express";
import {listTweets, saveTweet } from "../controllers/post.controller.js"

const router = Router();

router.get('/tweet', listTweets);

router.post('/tweet', saveTweet);

export default router