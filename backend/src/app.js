import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";

import { connectDB } from "./config/db.js";
import { app, server } from "./config/socket.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();

const port = process.env.PORT || 3000;
const __dirname = path.resolve();

// Middleware
app.use(express.json());
app.use(cookieParser());
// Cors config
app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	})
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

await connectDB();

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "../frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
	});
}

server.listen(port, () => {
	console.log(`Server is started on http://localhost:${port}`);
});
