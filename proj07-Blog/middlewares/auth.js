const { validateToken } = require('../services/auth');

function checkForAuthCookie(cookieName) {
    return (req, res, next) => {
        if(!cookieName) return next();

        const tokenCookieVal = req.cookies[cookieName];
        if(!tokenCookieVal) return next();

        try {
            const userPayload = validateToken(tokenCookieVal);
            req.user = userPayload;
        } catch (error) {
            // invalid token - ignore and continue without user
        }

        next();
    }
}

module.exports = checkForAuthCookie;