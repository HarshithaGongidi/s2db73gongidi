var express = require('express');
var router = express.Router();

/* GET RABBIT. */
router.get('/', function(req, res, next) {
  res.render('rabbit', { title: "Search Results"});
});

module.exports = router;
