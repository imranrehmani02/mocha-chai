let sinon = require('sinon');
let chai = require('chai');
let expect = chai.expect;
let Student = require('../controllers/studentController');
let studentObj = new Student();
let chaiaspromised = require('chai-as-promised');
chai.use(chaiaspromised)

describe(' ---- Promise  ---- ',()=>{

    it('Normal Value Function',(done)=>{
        studentObj.dbData().then((result)=>{
            expect(result).to.be.equal(10);
            done();
        })
    })

    it('Chai promised value function',()=>{
        return expect(studentObj.dbData()).to.eventually.equal(10);
    })
})