const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/current/:location', weatherController.getCurrentWeather);

module.exports = router;
