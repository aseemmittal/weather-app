const express = require('express');

const router = express.Router();

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Weather App' });
});

/**
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */
router.get('/weather', async function (req, res, next) {
    if (req.weatherData) res.status(req.weatherResponseCode).json(req.weatherData);
    else next({ msg: 'No weather data received' });
});

module.exports = router;
