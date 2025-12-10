require('dotenv').config();

const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const Blog = require('./models/blog');

const userRoute = require('./routes/user');
const blogRoute = require('./routes/blog');

const checkForAuthCookie = require("./middlewares/auth");

const app = express();
const PORT = process.env.PORT || 8001;

mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/blogify').then((e) => {
    console.log("MogoDB connected!");
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(checkForAuthCookie(process.env.COOKIE_NAME || "Token"))
// serve images from the misspelled `public/imgaes` directory at the `/images` URL
app.use('/images', express.static(path.join(__dirname, 'public', 'imgaes')));

app.use(express.static(path.resolve('./public')));

app.get('/', async (req, res) => {
    const allBlogs = await Blog.find({});
    res.render('home', {
        user: req.user,
        blogs: allBlogs,
    });
});

app.use('/user', userRoute);
app.use('/blog', blogRoute);


app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));