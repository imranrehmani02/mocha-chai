let sinon = require('sinon');
let chai = require('chai');
let expect = chai.expect;
let Student = require("../controllers/studentController");
let studentObj = new Student();


describe("-------  STUB  --------",()=>{

    it('Check function arguments',()=>{
        let stubObj = sinon.stub(studentObj, 'getExternal')
        stubObj.withArgs(40).returns(5);
        expect(studentObj.finalMarks(40)).to.be.equal(54);
    })
})