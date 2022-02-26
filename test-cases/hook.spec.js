/* Mocha is a feature-rich javascript test framework for node js

    Mocha provides built in hooks that can be user to setup preconditions
    and clean up after your lists. The four most commonly used hooks are:
    
    before(), after(), beforeEach(), afterEach()*/

let chai = require('chai');
let expect = chai.expect;
let sinon = require('sinon');

describe(" ----- Heading  1  ----- ",()=>{

    after(function(){
        console.log("---- Last ----");
    })

    before(function(){
        console.log("---- First ----");
    })

    afterEach(function(){
        console.log("---- Run after each test case ----");
    })

    beforeEach(function(){
        console.log("---- Run before each test case ----");
    })

    let data = "code";

    it('Check string',()=>{
        expect(data).to.be.a('string');
    })

    it('value',()=>{
        expect(data).to.be.equal('code');
    })
})