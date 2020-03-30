const express = require("express");
const router = express.Router();
const ShortenerContoller = require('../controllers/shortener');

router.get('/:id', ShortenerContoller.shortener_get_link)
router.post('/new', ShortenerContoller.shortener_post_link)

module.exports = router
