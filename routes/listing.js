const express = require('express');
const router = express.Router();
var listing = require("../controllers/listing");

router.get('/search', function (req, res) {
    res.json(listing.findListing(req.params.input));
});
router.get('/listings', listing.findAllListings);
router.get('/new-listing', function (req, res) {
    if (req.user) {
        res.render('new-listing', { user: req.user, message: undefined  });
    } else {
        res.redirect('/');
    }
});
router.post('/new-listing', listing.newListing);
module.exports = router;