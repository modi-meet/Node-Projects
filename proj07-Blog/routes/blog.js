const {Router} = require('express');
const multer = require('multer');
const path = require('path');

const Blog = require('../models/blog');

const router = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads/`));
  },
  filename: function (req, file, cb) {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

router.get('/add-new', (req, res) => {
    return res.render('addBlog', {
        user: req.user,
    })
});

router.post('/', upload.single('coverImage'), async (req, res) => {
  try {
    const {title, body} = req.body;

    if (!req.user) return res.status(401).redirect('/user/signin');

    const coverImageURL = req.file ? `/uploads/${req.file.filename}` : '/images/default.png';

    const blog = await Blog.create({
      body,
      title,
      createdBy: req.user._id,
      coverImageURL,
    });

    return res.redirect(`/blog/${blog._id}`);
  } catch (err) {
    console.error('Error creating blog:', err);
    return res.status(500).send('Failed to create blog');
  }
})

module.exports = router;