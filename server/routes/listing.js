const express = require('express');
const router = express.Router();
var listing = require("../controllers/listing");

router.get('/search', function (req, res) {
    res.json(listing.findListing(req.params.input));
});
router.get('/listings', function (req, res) {
    res.render('listings', { listings: res.json(listing.findAllListings()) });
});
module.exports = router;