var express = require('express');
var router = express.Router();

/* GET Selector */
router.get('/', function(req, res, next) {
  res.render('selector', { title: "Selector"});
});

module.exports = router;
