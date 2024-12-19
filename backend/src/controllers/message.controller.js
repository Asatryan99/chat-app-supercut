import cloudinary from "../config/cloudinary.js";
import { getReceiverSocketId, io } from "../config/socket.js";
import MessageModel from "../models/message.model.js";
import UserModel from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;
		const filteredUsers = await UserModel.find({
			_id: { $ne: loggedInUserId },
		}).select("-password");

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.log("Error in getUsersForSidebar controller", error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

export const getMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.params;
		const myId = req.user._id;

		const messages = await MessageModel.find({
			$or: [
				{ from: myId, to: userToChatId },
				{ from: userToChatId, to: myId },
			],
		});

		res.status(200).json(messages);
	} catch (error) {
		console.log("Error in getMessages controller", error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
};

export const sendMessage = async (req, res) => {
	try {
		const { text, image } = req.body;
		const { id: userToChatId } = req.params;
		const myId = req.user._id;

		let imageUrl;
		if (image) {
			const uploadResponse = await cloudinary.uploader.upload(image);
			imageUrl = uploadResponse.secure_url;
		}

		const newMessage = new MessageModel({
			from: myId,
			to: userToChatId,
			text,
			image: imageUrl,
		});

		await newMessage.save();

		const receiverSocketId = getReceiverSocketId(userToChatId);
		if (receiverSocketId) {
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}

		res.status(200).json(newMessage);
	} catch (error) {
		console.log("Error in sendMessage controller", error.message);
		res.status(500).json({ message: "Internal Server Error" });
	}
};
