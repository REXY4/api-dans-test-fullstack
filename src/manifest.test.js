/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const request = require('supertest');
const Manifest = require('./manifest');

describe('Test example', () => {
  beforeAll(async () => {
    this.manifest = new Manifest();
    await this.manifest.start();
    this.expressApp = this.manifest.server.http;
  });


  afterAll((done) => {
    this.expressApp.close(done);
  });

  test('GET PING /api/v1/ping', (done) => {
    request(this.expressApp)
      .get('/api/v1/ping')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });

  //login api
  test('GET LOGIN /api/v1/login', (done) => {
    request(this.expressApp)
      .get('/api/v1/user/login')
      .send({
        email: 'jhondoe@gmail.com',
        password : "123456"
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        this.token = res.body.data.token;
        if (err) return done(err);
        return done();
      });
  });
 
});
