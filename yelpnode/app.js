require('dotenv').config();
const request = require('superagent');
//get access token with api creds
console.log(process.env.FUSION_CLIENT_ID)
request
    .post('https://api.yelp.com/oauth2/token')
    .send("grant_type=client_credentials")
    .send("client_id="+process.env.FUSION_CLIENT_ID)
    .send("client_secret="+process.env.FUSION_CLIENT_SECRET)
    .set('accept', 'json')
    .end((err, response) => {
    // Calling the end function will send the request
        console.log(response.body.access_token)
    });

/*request
.post('/api/pet')
.send({ name: 'Manny', species: 'cat' }) // sends a JSON post body
.set('X-API-Key', 'foobar')
.set('accept', 'json')
.end((err, res) => {
  // Calling the end function will send the request
});*/