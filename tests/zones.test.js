const request = require('supertest');
const app = require('../server');


describe('GET /api/zones', () => {
    it('should return a 200', () => {
        return request(app)
            .get('/api/zones')
            .then(res => {
                expect(res.status).toBe(200);
                expect(res.type).toEqual('application/json');
            })
    });
});

describe('POST /api/current_zone', () => {
    it('should return a 200 - Zones Available', () => {
        return request(app)
            .post('/api/current_zone')
            .send({ resting_hr: 30, current_hr: 100})
            .then(res => {
                expect(res.status).toBe(200);
                expect(res.type).toEqual('text/html');
                expect(res.body).toStrictEqual({});
                expect(res.text).toBe('Current HR: 100 - Resting HR: 30 - Zone: 1');
            })
    });

    it('should return a 200 - No Zones Available, High HR', () => {
        return request(app)
            .post('/api/current_zone')
            .send({ resting_hr: 30, current_hr: 200})
            .then(res => {
                expect(res.status).toBe(200);
                expect(res.type).toEqual('text/html');
                expect(res.body).toStrictEqual({});
                expect(res.text).toBe('Slow down, you could injure yourself');
                

            })
    });


    it('should return a 200 - No Zones Available, Low HR', () => {
        return request(app)
            .post('/api/current_zone')
            .send({ resting_hr: 30, current_hr: 60})
            .then(res => {
                expect(res.status).toBe(200);
                expect(res.type).toEqual('text/html');
                expect(res.body).toStrictEqual({});
                expect(res.text).toBe('You are not exercising hard enough. Do more');
                

            })
    });

    it('should return a 500 - Wrong Input', () => {
        return request(app)
            .post('/api/current_zone')
            .send({ resting_hr: "red", current_hr: 100})
            .then(res => {
                expect(res.status).toBe(500);
                expect(res.body).toStrictEqual({});
                expect(res.text).toBe('Input must be a number');

            })
    });
})