var express = require('express');
const rabbit_controlers= require('../controllers/rabbit');
var router = express.Router();

// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET Rabbit */
router.get('/', rabbit_controlers.rabbit_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('rabbit', { title: 'Search Results Rabbit' });
});

/* GET detail rabbit page */
router.get('/detail', rabbit_controlers.rabbit_view_one_Page);

/* GET create rabbit page */
router.get('/create',secured, rabbit_controlers.rabbit_create_Page);

/* GET update rabbit page */
router.get('/update',secured, rabbit_controlers.rabbit_update_Page);

/* GET delete rabbit page */
router.get('/delete',secured, rabbit_controlers.rabbit_delete_Page);

module.exports = router;

