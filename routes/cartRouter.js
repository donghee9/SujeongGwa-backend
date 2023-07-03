const express = require('express');
const { cartController } = require('../controllers');
const { loginRequired } = require('../utils/auth');
const router = express.Router();

router.post('', loginRequired, cartController.createCart);

module.exports = router;
