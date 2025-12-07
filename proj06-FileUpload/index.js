const express = require('express');
const multer  = require('multer')
const path = require("path");

const app = express();
const port = 8000;

app.use(express.json())

// const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        return cb(null, './uploads');
    }, 
    filename: function (req, file, cb) {
        return cb (null, `${Date.now()} - ${file.originalname}`);
    }
}) ;

const upload = multer({ storage });


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    return res.render('homepage');
});

app.post('/upload', upload.single('myImage'), (req, res) => {
    console.log(req.body);
    console.log(req.file);

    return res.redirect('/');
})


app.listen(port, () => console.log(`Server listening on Port: ${port}!`));