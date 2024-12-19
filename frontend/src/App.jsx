import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import SignUpPage from "./pages/SignUpPage";

import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import { useThemeStore } from "./store/useThemeStore";

import { Loader } from "lucide-react";

const App = () => {
	const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();
	const { theme } = useThemeStore();

	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	if (isCheckingAuth && !authUser)
		return (
			<div className="flex justify-center items-center h-screen">
				<Loader className="size-10 animate-spin" />
			</div>
		);

	return (
		<div data-theme={theme}>
			<Navbar />

			<Routes>
				<Route
					path="/"
					element={authUser ? <HomePage /> : <Navigate to="/login" />}
				/>
				<Route
					path="/login"
					element={!authUser ? <LoginPage /> : <Navigate to="/" />}
				/>
				<Route
					path="/signup"
					element={!authUser ? <SignUpPage /> : <Navigate to="/" />}
				/>
				<Route
					path="/profile"
					element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
				/>
				<Route path="/settings" element={<SettingsPage />} />
			</Routes>
			<Toaster />
		</div>
	);
};

export default App;
