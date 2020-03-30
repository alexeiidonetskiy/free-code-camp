const express = require("express");
const router = express.Router();
const WhoamiController = require('../controllers/whoami');

router.get('/', WhoamiController.whoami)



module.exports = router
