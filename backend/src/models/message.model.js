import mongoose from "mongoose";

const messageScheme = new mongoose.Schema(
	{
		from: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		to: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
		text: { type: String },
		image: { type: String },
	},
	{ timestamps: true }
);

export default mongoose.model("Message", messageScheme);
