// Http integration testing with chai assertion

let chai = require('chai');
let assert = chai.assert;
let should = chai.should();
let expect = chai.expect;

let server = require('../app');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe(' -----  Task API  ------ ', () => {
    it('Get user', (done) => {

        chai.request(server)
            .get('/users')
            .end((err, response) => {
                expect(response.status).to.be.equal(200);
                expect(response.body).to.have.all.keys('data','isSuccess','status');
                done();
            })
    })
})