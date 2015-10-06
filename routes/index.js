var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  models.ck_playertimes.findAll({
    where: {
      mapname: "surf_classics"
    },
    order: "runtimepro ASC"
  }).then(function(players) {
    res.render('index', { title: 'Test', data: players});
  });
});

module.exports = router;
