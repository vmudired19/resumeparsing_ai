# My Fullstack App

This project is a fullstack application that includes a backend built with Node.js and Express, and a frontend built with React. The application allows users to log in and stores their information in a MongoDB database.

## Project Structure

```
my-fullstack-app
├── backend
│   ├── src
│   │   ├── app.js          # Entry point for the backend application
│   │   ├── routes
│   │   │   └── auth.js     # Authentication routes
│   │   ├── models
│   │   │   └── User.js     # Mongoose model for User
│   │   └── controllers
│   │       └── authController.js # Logic for user authentication
│   ├── package.json         # Backend dependencies
│   └── .env                 # Environment variables
└── frontend
    ├── src
    │   ├── App.js           # Main entry point for the frontend application
    │   ├── components
    │   │   └── LoginForm.js  # Login form component
    │   └── services
    │       └── api.js       # API calls to the backend
    ├── package.json          # Frontend dependencies
    └── README.md             # Frontend documentation
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Backend Setup

1. Navigate to the `backend` directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add your MongoDB connection URI:
   ```
   MONGO_URI=your_mongodb_connection_uri
   ```

4. Start the backend server:
   ```
   node src/app.js
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the frontend application:
   ```
   npm start
   ```

## Usage

- Access the frontend application in your browser at `http://localhost:3000`.
- Use the login form to authenticate users. The backend will handle the login logic and store user information in the database.

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.