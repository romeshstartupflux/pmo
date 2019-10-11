var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Contact Us */ 
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/** ABout Us */
router.get('/about-us', function(req, res, next) {
  res.render('about-us', { title: 'About Us' });
});

/** Client */
router.get('/client', function(req, res, next) {
  res.render('client', { title: 'Client' });
});

/** Downlaod */
router.get('/download', function(req, res, next) {
  res.render('download', { title: 'Download' });
});

/** Services */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

module.exports = router;
