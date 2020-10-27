var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About Us' });
});

router.get('/:name', function(req, res, next) {
  let name = req.params.name.charAt(0).toUpperCase() + req.params.name.slice(1); // capitalize name
  res.render(`about/${req.params.name}`, { title: `About Us | ${name}` });
})

module.exports = router;