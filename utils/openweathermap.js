/**
 * API interface for openweathermap.org
 */

const axios = require('axios');

const { APPID } = process.env;

if (!APPID) {
    console.log('No API key present!');
    process.exit(1);
}

/**
 * @param {string} query
 * @param {string} lon
 * @param {string} lat
 */
const getWeatherByQuery = (query, lon, lat) =>
    `http://api.openweathermap.org/data/2.5/weather?APPID=${APPID}&q=${query || ''}&lon=${lon || ''}&lat=${lat || ''}&units=imperial`;

/**
 * @param {axios.response} res
 */

const processWeatherData = (res) => {
    const { data } = res;
    return Promise.resolve({
        responseCode: data.cod,
        responseData: {
            city: data.name,
            temperature: data.main.temp,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
        },
    });
};

/**
 * @param {string} query
 * @param {string} lon
 * @param {string} lat
 */
async function getLocationWeather(query, lon, lat) {
    try {
        const weatherInfo = await axios.get(getWeatherByQuery(query, lon, lat)).then(processWeatherData);
        return weatherInfo;
    } catch (error) {
        return { responseCode: error.response.status, responseData: error.response.data };
    }
}

module.exports = { getLocationWeather };
