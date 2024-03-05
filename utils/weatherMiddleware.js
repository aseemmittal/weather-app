module.exports = (api) => {
    /**
     * @param {express.Request} req
     * @param {express.Response} res
     * @param {express.NextFunction} next
     */
    return (req, res, next) => {
        if (req.query.q || (req.query.lon && req.query.lat)) {
            api.getLocationWeather(req.query.q, req.query.lon, req.query.lat)
                .then((data) => {
                    req.weatherData = data.responseData;
                    req.weatherResponseCode = data.responseCode;
                    next();
                })
                .catch((err) => next(err));
        } else {
            next();
        }
    };
};
