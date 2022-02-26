let sinon = require('sinon');
let chai = require('chai');
let expect = chai.expect;
let Student = require('../controllers/studentController');
let studentObj = new Student();




describe("------- Spay ---------", () => {

    it('Test User Function', () => {
        expect(studentObj.userId()).to.be.equal(12);
    })

    it('Function counting', function () {

        let spyObj = sinon.spy(studentObj, 'getInfo');
        studentObj.home(5);
        expect(spyObj.calledOnce).to.be.true;
        // expect(spyObj.calledTwice).to.be.true;
    })
})