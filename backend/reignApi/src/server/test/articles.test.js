const supertest = require('supertest');
const app = require('../server');
const axios = require('axios');
const request = supertest(app);


describe('Sample Test', () => {
    it('should test that true === true', () => {
        expect(true).toBe(true)
    })
});

/*
describe('Get articles', () => {
    testServer.useInTest();
    testDb.useInTest();

    it('should responds with 200 articles', async() => {
        const api = this.api;
        const db = this.db;
    })
});
*/