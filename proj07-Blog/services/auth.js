const JWT = require('jsonwebtoken');

if (!process.env.JWT_SECRET) {
    console.error('JWT_SECRET environment variable is not set. Exiting to avoid insecure defaults.');
    process.exit(1);
}

const secret = process.env.JWT_SECRET;

function createTokenForUser(user) {
    const payload = {
        _id : user._id,
        email: user.email,
        profileURL: user.profileURL,
        role: user.role,
    };

    // Add an expiration to tokens
    const token = JWT.sign(payload, secret, { expiresIn: '7d' });
    return token;
};

function validateToken(token) {
    const payload = JWT.verify(token, secret);

    return payload;
};

module.exports = { createTokenForUser, validateToken };