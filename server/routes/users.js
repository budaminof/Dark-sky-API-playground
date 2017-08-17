const express = require('express');
const router = express.Router();
const request = require('request');
require('dotenv').load();

router.get('/:lat/:lng', function(req, res, next) {
  let DARK_SKY = `https://api.darksky.net/forecast/${process.env.API_KEY}/${req.params.lat},${req.params.lng}`;

  request.get(DARK_SKY, function (error, response, body) {
      }).pipe(res);

});

module.exports = router;
