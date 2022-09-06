'use strict';

const supertest = require( 'supertest' );
const server = require( '../server' );
const request = supertest( server.app );

describe( 'API server', () => {

    it('Server Works', async () => {
        const res = await request.get('/');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hello from HomePage')
    })

    it('Home Page Works', async () => {
        const res = await request.get('/');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('Hello from HomePage')
    })
    

    it('Validate number works', async () => {
        const res = await request.get('/square').query('num=5');
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('{"num":25}')
    })


    it('Validate number error', async () => {
        const res = await request.get('/square').query('num=saeed');
        expect(res.status).toEqual(500);
        expect(res.text).toEqual('{"code":500,"message":"Server Error: saeed is not a number"}')
    })
    
})