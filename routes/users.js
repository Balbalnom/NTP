
const express = require('express');
const router = express.Router();
var User = require("../controllers/user");

router.post('/register', User.register);
router.get('/sign-up', function (req, res) {
    res.render('sign-up', { user: req.user, message: undefined });
});
router.get('/login', function (req, res) {
    res.render('login', { user: req.user, message: undefined });
});
router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});
module.exports = router;
