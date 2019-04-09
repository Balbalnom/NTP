const listingModel = require('../models/db')['Listing'];
module.exports = {
    findListing(input) {
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
    },
    findAllListings() {
        // search for specific attributes - hash usage
        listingModel.findAll().then(listings => {
            return listings;
        });
    }
}