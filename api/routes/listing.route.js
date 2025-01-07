// 3rd listing.route.js
import express from "express";
import { createListing } from "../controller.js/listing.controller.js";
import { verifyToken } from "./verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken , createListing)

export default router