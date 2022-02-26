let sinon = require('sinon');
let chai = require('chai');
let expect = chai.expect;
const nock = require('nock');
let Student = require('../controllers/studentController');
let studentObj = new Student();

describe(' -----  NOCK Test Suit  ----- ', () => {
    it('Api Test', (done) => {

        let obj = { status: 'ok', statusCode: 200, data: [] }

        const apihit = nock('http://localhost/api')
            .get('/article-list')
            .reply(200, obj);

        studentObj.thirdPartyApi()
            .then((record) => {
                expect(record).to.be.eql(obj);
                done();
            })
            .catch((error) => {
                done(new Error('error:- ', error))
            })
    })
})