## About The Project

This app is developed to fetch weather info from openweathermap API.

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Install NPM packages
    ```sh
    npm install
    ```
2. Enter your API key in `.env`
    ```js
    API_KEY = ENTER_YOUR_API;
    ```
3. Run App
    ```sh
    npm start
    ```
4. Open below link in browser
    ```
    http://localhost:3000
    ```
5. To fetch weather info from API using GET request
    ```
    http://localhost:3000/weather?q=Toronto
    http://localhost:3000/weather?lon=-79.4163&lat=43.7001
    ```

### Testing

1. Install NPM packages
    ```sh
    npm install
    ```
2. Enter your API key in `.env`
    ```js
    API_KEY = ENTER_YOUR_API;
    ```
3. To execute test
    ```sh
    npm test
    ```
