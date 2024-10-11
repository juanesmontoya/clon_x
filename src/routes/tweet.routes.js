import { Router } from "express";
import {listTweets, saveTweet } from "../tweets/controllers/tweet.controller.js"

const router = Router();

router.get('/tweet', listTweets);

router.post('/tweet', saveTweet);

export default router