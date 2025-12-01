const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");  
const { connectToMongoDb } = require("./connection");
const { checkForAuthentication, restrictTo } = require('./middlewares/auth');
const { createUrlLimiter } = require("./middlewares/rateLimiter");
const URL = require("./models/url");

require("dotenv").config();

const urlRoute = require("./routes/url");
const staticRoute = require('./routes/staticRouter');
const userRoute = require('./routes/user');


const { Timestamp } = require("bson");
const { handleGetAnalytics } = require("./controller/url");

const app = express();
const PORT = process.env.PORT || 8001;

// MongoDB connection
mongoose.set("strictQuery", false);

const mongourl = process.env.MONGODB_URL;
console.log("Mongo URL from env:", process.env.MONGODB_URL);
connectToMongoDb(mongourl)
  .then(() => console.log("MonogoDB connected!"))
  .catch((err) => console.error("Mongo connection error:", err));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(checkForAuthentication);

app.use("/url", restrictTo(["NORMAL"]), createUrlLimiter, urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);


app.use("/admin/url", restrictTo(["ADMIN"]), );



// Routes
app.get("/url/:shortId", async (req, res) => {
  const shortID = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId: shortID },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    },
    { new: true }
  );

  if (!entry) {
    return res.status(404).json({ message: "Short URL not found" });
  }

  res.redirect(entry.redirectURL);
});

app.get("/", async (req, res) => {
  const allUrls = await URL.find({});

  return res.render("home", {
    urls: allUrls,
  });  
})


app.get("/analytics/:shortId", handleGetAnalytics);

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
