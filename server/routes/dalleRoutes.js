import express from "express";
import * as dotenv from 'dotenv' 
import {v2 as cloudinary} from 'cloudinary'
import Post from "../mongodb/models/post.js";
import { Configuration, OpenAIApi } from "openai";

dotenv.config() ; 

const router  = express.Router() ;

const configuration = new Configuration({
    apiKey: process.env.OPENAI,
})

router.route('/').get((req, res) => {
    res.send("Hello fro Dall E")
})

export default router