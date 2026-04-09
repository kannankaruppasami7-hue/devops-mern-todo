const request = require('supertest');
const {server,app} = require('../index');
const mongoose = require('mongoose');

describe('GET api/tasks',()=>{
    it('should return 200 OK',async ()=>{

       const response = await request(app).get('/api/tasks').expect(200)
       expect(response.statusCode).toBe(200);
       expect(Array.isArray(response.body)).toBe(true);

      
    })


  
})

afterAll(async ()=>{
    await mongoose.connection.close();
    await server.close();
})