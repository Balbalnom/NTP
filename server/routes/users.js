
const express = require('express');
const router = express.Router();
var User = require("../controllers/user");

router.post('/register', function (req, res) {
    res.send(User.register(req));
});
router.get('/sign-up', function (req, res) {
    res.render('sign-up');
});
router.get('/login', function (req, res) {
    res.render('login');
});
router.post('/login-post', function (req, res) {
    res.send(User.login(req));
});
module.exports = router;
