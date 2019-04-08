const express = require('express');
const router = express.Router();

/* GET About *user* page. */
router.get('/', function(req, res, next) {
    res.render('AboutMe', {
        title: 'About me',
        userArray: ['Jiannan', "Sydney", "Bijan", "Brendan", "Canbin", "Sam", "Tigist", "William"],
        user : req.params.name,
        body: '<div> test </div><div>test2</div>'
    });
});

module.exports = router;
