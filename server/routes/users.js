const express = require('express');
const router = express.Router();
const request = require('request');
require('dotenv').load();

const DarkSky = require('dark-sky')
const darksky = new DarkSky(process.env.API_KEY);

router.get('/:lat/:lng', async (req, res, next) => {
  try {
    let latitude = req.params.lat;
    let longitude = req.params.lng;
    const forecast = await darksky
      .options({
        latitude,
        longitude
      })
      .get()
      console.log(forecast);
    res.status(200).json(forecast)
  } catch (err) {
    next(err)
  }
})

module.exports = router;
