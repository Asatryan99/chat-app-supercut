import express from "express";

import * as authController from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/logout", protectRoute, authController.logout);
router.get("/check", protectRoute, authController.checkAuth);
router.patch("/update-profile", protectRoute, authController.updateProfile);

export default router;
