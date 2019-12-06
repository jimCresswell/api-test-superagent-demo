/**
* Example API testing using Mocha and Supertest.
*/
/* eslint prefer-arrow-callback: off, func-names: off */

const request = require('supertest');

describe(
  'For the API at https://jsonplaceholder.typicode.com the request',
  function () {
    /* Set up the base request to the API for reuse in tests. */
    before(function () {
      this.request = request('https://jsonplaceholder.typicode.com');
    });

    /* The specs for the /posts endpoint */
    describe('/posts', function () {
      this.endpoint = '/posts';

      /* The specs for the GET verb */
      describe('with GET', function () {
        it('responds with json', function (done) {
          this.request
            .get('/posts')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
        });
      });

      /* The specs for the POST verb */
      describe('with POST', function () {
        this.data = {
          title: 'My Post',
          body: 'I love JSON.',
          userId: 10,
        };
        it('responds with json', function (done) {
          this.request
            .post('/posts')
            .type('application/json')
            .send(this.data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201, done);
        });
      });
    });
  }
);
