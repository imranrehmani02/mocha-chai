// Check how many times call a function or (with argument or not)

let sinon = require('sinon');
let chai = require('chai');
let expect = chai.expect;
let Student = require('../controllers/studentController');
let studentObj = new Student();


describe(" ------  MOCK  ------- ",()=>{

    it("Count Function",()=>{
        let mock = sinon.mock(studentObj);
        let expt = mock.expects('getExternal');
        expt.exactly(1);
        expt.withArgs(42);
        studentObj.finalMarks(42);
        mock.verify();
    })
})