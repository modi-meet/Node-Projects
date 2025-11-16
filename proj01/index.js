const express = require('express')
const { connectMongoDb } = require('./connection');
require("dotenv").config();
const env = process.env;

const { logReqRes } = require('./middlewares');

const userRouter = require('./routes/user');

const app = express();
const PORT = 8000;

const mongourl = env.MONGODB_URL;

// Connection
connectMongoDb(mongourl)
  .then(() => console.log("MongoDB connected successfully!"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes('log.txt'));

// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`Server Started at Port: ${PORT}`));
