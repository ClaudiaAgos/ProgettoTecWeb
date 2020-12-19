var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome on board!' });
});

router.get('/editor', function(req, res, next) {
  res.render('editor', { title: 'Sei nell\'editor' });
});

router.get('/player', function(req, res, next) {
  res.render('player', { title: 'Sei nel player' });
});

router.get('/choice', function (req, res, next) {
  res.render('choice', {title: 'Scegli'});
});






module.exports = router;
