'use strict';
require('dotenv').load();
const express = require('express');
const router = express.Router();

const DarkSky = require('dark-sky');
const darksky = new DarkSky(process.env.API_KEY);

router.get('/:lat/:lng', function (req, res, next) {

  var latitude = req.params.lat;
  var longitude = req.params.lng;

  darksky.options({
    latitude: latitude,
    longitude: longitude
    })
  .get()
  .then(function (response) {
    console.log(response);
    res.status(200).json(response);
  })
  .catch(function (err) {
    console.log(err);
    next(err);
  })

});

module.exports = router;
