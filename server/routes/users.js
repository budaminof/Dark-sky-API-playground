const express = require('express');
const router = express.Router();
const request = require('request');
require('dotenv').load();

const DarkSky = require('dark-sky');
const darksky = new DarkSky(process.env.API_KEY);

router.get('/:lat/:lng', async function (req, res, next) {
  try {
    var latitude = req.params.lat;
    var longitude = req.params.lng;
    var forecast = await darksky.options({
      latitude: latitude,
      longitude: longitude
    }).get();
    console.log(forecast);
    res.status(200).json(forecast);
  } catch (err) {
    next(err);
  }
});
module.exports = router;
