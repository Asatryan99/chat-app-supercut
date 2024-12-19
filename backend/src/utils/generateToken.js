import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "1d",
	});

	res.cookie("jwt", token, {
		maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
		httpOnly: true, // prevent XSS attacks cross-site scripting
		sameSite: "Strict", // CSRF attacks cross-site request forgery
		secure: true, // Only https
	});

	return token;
};
