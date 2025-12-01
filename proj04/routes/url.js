const { body, validationResult } = require('express-validator');

const express = require('express');
const { handleGenerateShortUrl, handleGetAnalytics } = require('../controller/url');
const router = express.Router();

router.post('/', [
   body('url')
      .notEmpty().withMessage('URL is required')
      .isURL().withMessage('Invalid URL format')
], handleGenerateShortUrl);

router.get('/analytics/:shortId', handleGetAnalytics);

module.exports = router;