var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express'
  });
});

//Perform login
router.get(
  '/login', 
  passport.authenticate('auth0', {
    clientID: process.env.AUTH0_CLIENT_ID,
    domain: process.env.AUTH0_DOMAIN,
    redirectUri: process.env.AUTH0_CALLBACK_URL,
    audience: 'https://' + process.env.AUTH0_DOMAIN + '/userinfo',
    responseType: 'code',
    scope: 'openid profile'
  }),
  function(req, res){
    res.redirect('/');
  }
);

//Perform logout and redirect to home
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

//Perform last stage of authentication and redirect to /user
router.get(
  '/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/error'
  }),
  function(req, res){
    res.redirect(req.session.returnTo || '/user');
  }
);

module.exports = router;
