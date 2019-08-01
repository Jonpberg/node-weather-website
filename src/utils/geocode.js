const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoiam9ucGJlcmc5IiwiYSI6ImNqeHhqc2V0MDAwYm8zbHFzcWF4bXR4bDcifQ.MJAnzPJt8XAdg0BaGalNBg&limit=1`;

    request({url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connet to Mapbox.', undefined);
        }
        else if (body.features.length === 0) {
            callback('Unable to find location. Try again.', undefined);
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            }) 
        }
    });
}

module.exports = geocode;