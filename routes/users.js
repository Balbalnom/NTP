
const express = require('express');
const router = express.Router();
var User = require("../controllers/user");

router.post('/register', function (req, res) {
    const result = User.register(req);
    console.log(result);
    if (result.code == 200) {
        res.render('login', { message: result.message });
    } else {
        res.render('sign-up', { message: result.message });
    }
});
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
