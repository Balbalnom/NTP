
const express = require('express');
const router = express.Router();
var search = require("../controllers/search");

//router.post('/register',User.register)
router.get('/search', function (req, res) {
    res.json(search.findListing(req.params.input));
});
module.exports = router;