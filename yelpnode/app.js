'use strict';

const Yelp = require('node-yelp-fusion');

require('dotenv').config();
const clientId = process.env.FUSION_CLIENT_ID;
const clientSecret = process.env.FUSION_CLIENT_SECRET;

var yelp = new Yelp({ id: clientId, secret: clientSecret });

yelp.search("term=burgers&location=arcadia,ca")
    .then(function (result) {
        console.log(result);
    }, function (error) {
        console.log(error);
    });




/*
const yelp = require('yelp-fusion');

require('dotenv').config();
const clientId = process.env.FUSION_CLIENT_ID;
const clientSecret = process.env.FUSION_CLIENT_SECRET + 'asd';

const token = yelp.accessToken(clientId, clientSecret).then(response => {
    //console.log(response.jsonBody.access_token);
    return response.jsonBody.access_token;
}).catch(e => {
    console.log(e);
    return e;
});

const client = yelp.client(token);

client.search({
    term: 'Tea Station',
    location: 'Temple City, ca'
}).then(response => {
    console.log(response.jsonBody.buisnesses[0].name);
}).catch(e => {
    console.log(e);
});

client.phoneSearch({
    phone: '+16269621598'
}).then(response => {
    console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
    console.log(e);
});

client.transactionSearch('delivery', {
    location: 'san diego'
}).then(response => {
    console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
    console.log(e);
});


client.business('gary-danko-san-francisco').then(response => {
    console.log(response.jsonBody.name);
  }).catch(e => {
    console.log(e);
  });


client.reviews('gary-danko-san-francisco').then(response => {
    console.log(response.jsonBody.reviews[0].text);
  }).catch(e => {
    console.log(e);
  });


client.autocomplete({
    text:'pizza'
  }).then(response => {
    console.log(response.jsonBody.terms[0].text);
  }).catch(e => {
    console.log(e);
  });


// matchType can be 'lookup' or 'best'
client.businessMatch('lookup', {
    name: 'Pannikin Coffee & Tea',
    address1: '510 N Coast Hwy 101',
    address2: 'Encinitas, CA 92024',
    city: 'Encinitas',
    state: 'CA',
    country: 'US'
  }).then(response => {
    console.log(response.jsonBody.businesses[0].id);
  }).catch(e => {
    console.log(e);
  });
  */