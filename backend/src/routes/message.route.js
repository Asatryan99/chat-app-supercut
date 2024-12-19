import express from "express";

import * as messageController from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/users", protectRoute, messageController.getUsersForSidebar);
router.get("/:id", protectRoute, messageController.getMessages);
router.post("/send/:id", protectRoute, messageController.sendMessage);

export default router;
