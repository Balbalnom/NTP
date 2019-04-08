
const express = require('express');
const router = express.Router();
var User = require("../controllers/user");

//router.post('/register',User.register)
router.post('/register', function (req, res) {
    res.send(User.register(req));
});
module.exports = router;
