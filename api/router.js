var express = require('express');
var router = express.Router();

router.use('/item',require('./item'));

module.exports = router;