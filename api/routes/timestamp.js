const express = require("express");
const router = express.Router();
const TimestampController = require('../controllers/timestamp');

router.get('/', TimestampController.get_current_time)

router.get('/:dateString', TimestampController.get_time)


module.exports = router
