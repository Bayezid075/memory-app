import express from "express";
const router = express.Router();
import { getPost } from "../controller/postController.js";
router.get("/", getPost);

export default router;
