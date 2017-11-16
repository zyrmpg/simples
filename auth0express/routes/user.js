var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user', { 
    title: 'user',
    user: req.user,
    profile: JSON.stringify(req.user, null, ' ') 
  });
});

module.exports = router;
