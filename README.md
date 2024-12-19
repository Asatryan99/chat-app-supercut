# Chat Application

Project name: Chatty

## Project Description

This project is a full-stack web application that includes a backend API built with Node.js and Express, and a frontend user interface built with React. The application implements features such as user authentication, real-time communication, and media upload capabilities.

## Features

- User Authentication (JWT-based).
- Real-time communication using WebSockets.
- Media upload and management with Cloudinary.
- Responsive UI built with React and TailwindCSS.
- State management using Zustand.

## Tech Stack

### Backend

- Node.js
- Express
- MongoDB with Mongoose
- bcrypt
- jsonwebtoken
- Cloudinary API
- Socket.io

### Frontend

- React
- React Router
- Zustand
- TailwindCSS with DaisyUI
- Vite (build tool)
- Axios

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- Node.js (v16 or higher)
- npm (v8 or higher)

### Steps to Run the Project Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Asatryan99/chat-app-supercut.git chat-app-supercut
   cd chat-app-supercut
   ```

2. Set up the environment variables by creating a `.env` file in the backend directory and filling it with the following:

   ```env
   PORT=your_port
   MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database_name>?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   NODE_ENV=production
   ```

   **More details at the end of the file**

3. Build the Project:
   Run the following command to create an optimized production build of the frontend. This step is necessary before starting the server:

   ```bash
   npm run build
   ```

4. Start the Server:
   Start the backend server along with the built frontend. This will serve both the API and the frontend from the same server:

   ```bash
   npm start
   ```

## Usage

- Register a new user or log in with an existing account.
- Use the chat feature for real-time communication.

---
---
---
---
---

# -How to Fill the `.env` File

To set up the environment variables in your project, create a `.env` file in the backend directory and fill it with the following details. Below is an explanation of each variable:

1. **PORT=your_port**

   - This variable specifies the port on which your server will run. For example, if you want the server to run on port 5000, set it like this:

     ```env
     PORT=5000
     ```

2. **MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<database_name>?retryWrites=true&w=majority**

   - This variable contains the MongoDB connection string.
   - Replace `<username>` with your MongoDB username.
   - Replace `<password>` with your MongoDB password.
   - Replace `<database_name>` with the name of the database you want to connect to.

   Example:

   ```env
   MONGO_URI=mongodb+srv://myUser:myPassword@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
   ```

   You can get the connection string from your [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account after creating a database.

3. **JWT_SECRET=your_jwt_secret**

   - This is the secret key used to sign and verify JWT (JSON Web Tokens) for user authentication.
   - Choose a strong, random string as your secret key.

   Example:

   ```env
   JWT_SECRET=yourSuperSecretKey
   ```

4. **CLOUDINARY_CLOUD_NAME=your_cloud_name**

   - This is your Cloudinary cloud name, which you can find in your [Cloudinary account settings](https://cloudinary.com/).

   Example:

   ```env
   CLOUDINARY_CLOUD_NAME=myCloudName
   ```

5. **CLOUDINARY_API_KEY=your_api_key**

   - This is your Cloudinary API key, which you can find in your Cloudinary account settings.

   Example:

   ```env
   CLOUDINARY_API_KEY=yourCloudinaryApiKey
   ```

6. **CLOUDINARY_API_SECRET=your_api_secret**

   - This is your Cloudinary API secret, which is also available in your Cloudinary account settings.

   Example:

   ```env
   CLOUDINARY_API_SECRET=yourCloudinaryApiSecret
   ```

7. **NODE_ENV=production**

   - This variable specifies the environment in which the application will run. For production, set it to `production`. For development, set it to `development`.

   Example:

   ```env
   NODE_ENV=production
   ```

   If you're working in a development environment, use:

   ```env
   NODE_ENV=development
   ```

---
