
const express = require('express');
const router = express.Router();
var User = require("../controllers/user");

router.post('/register', User.register);
router.get('/sign-up', function (req, res) {
    res.render('sign-up', { message: undefined });
});
router.get('/login', function (req, res) {
    res.render('login', { message: undefined });
});
// router.post('/login-post', function (req, res) {
//     res.send(User.login(req));
// });
module.exports = router;
