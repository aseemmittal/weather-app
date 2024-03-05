const request = require('supertest');
const app = require('../app');

describe('Test the root path', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the weather path with query', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/weather?q=Toronto');
        expect(response.statusCode).toBe(200);
    });
});

describe('Test the weather path with query', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/weather?q=fakeCity');
        expect(response.statusCode).toBe(404);
    });
});

describe('Test the weather path by longitude and Latitude', () => {
    test('It should response the GET method', async () => {
        const response = await request(app).get('/weather?lon=76.1422&lat=30.8482');
        expect(response.statusCode).toBe(200);
    });
});
