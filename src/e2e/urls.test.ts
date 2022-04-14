import supertest from 'supertest';
import app from '../server';
import { shortenerRequest, shortenerResponse } from '../types';

const goodRequest: shortenerRequest = {
    destination: 'https://www.google.com'
};

const badRequest: shortenerRequest = {
    destination: 'blabla'
};

const goodResponse: shortenerResponse = {
    destination: goodRequest.destination,
    slug: expect.any(String)
};


describe('POST /api/create', () => {
    it('should return 200 and shortener response', async () => {
        const request = supertest(app);
        const res = await request.post('/api/create').send(goodRequest);
        expect(res.status).toBe(201);
        expect(res.body).toMatchObject(goodResponse);
    });

    it('should return 200 and error response', async () => {
        const request = supertest(app);
        const res = await request.post('/api/create').send(badRequest);
        expect(res.status).toBe(500);
    });
});