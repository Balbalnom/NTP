const listingModel = require('../models/db').Listing;
exports.findAllListings = function(req, res) {
    // search for specific attributes - hash usage
    listingModel.findAll().then(listings => {
        res.render('listings', { listings: listings, user: req.user });
    });
};
exports.newListing = function(req, res) {
    req.body.UserId = req.user.id;
    req.body.hasRoomate = req.body.hasRoomate == undefined ? false : true;
    req.body.parking = req.body.parking == undefined ? false : true;
    req.body.allowPets = req.body.allowPets == undefined ? false : true;
    console.log(req.body);
    listingModel.create(req.body);
    res.redirect('/listings');
};
exports.findListing = function(input) {
    // search for specific attributes - hash usage
    let response = {};
    listingModel.findAll({where:{description:input}}).then(listings => {
        response.data = {};
        response.data.listings = [];
        for(var i = 0; i < listings.length; i++) {
            response.data.listings.push(listings[i].address);
        };
        
      // projects will be an array of Project instances with the specified name
    });
    return response;   
};