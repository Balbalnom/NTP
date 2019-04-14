const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { user: req.user,
    featuredListings: [
    {
      price: 234,
      name: 'aaa',
      address: '444',
      bathroom: 1,
      garage: 2,
      space: 123
    }
  ] });
});
router.get('/about', function(req, res, next) {
  res.render('about', { user: req.user });
});

module.exports = router;
