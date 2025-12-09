const {Router} = require('express');
const User = require('../models/user')
const { createTokenForUser } = require('../services/auth');

const router = Router();

router.get('/signin', (req, res) => {
    return res.render('signin');
})


router.get('/signup', (req, res) => {
    res.render('signup');
})

router.post('/signup', async (req, res) => {
    const { fullName, email, password } = req.body;

    const user = await User.create({ fullName, email, password });

    try {
        const token = createTokenForUser(user);
        return res.cookie('Token', token).redirect('/');
    } catch (err) {
        return res.redirect('/');
    }
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await User.matchPasswordAndGenerateToken(email, password);

        //console.log("Token", token);
        return res.cookie("Token", token).redirect('/');
    } catch (err) {
        // console.log('Signin error', err.message || err);
        return res.status(401).render('signin', { error: 'Invalid email or password' });
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie('Token').redirect('/');
});



module.exports = router;
