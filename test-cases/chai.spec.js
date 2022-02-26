let chai = require('chai');
let assert = chai.assert;
let should = chai.should();
let expect = chai.expect;


// ############# ASSERT ############# //

describe('------- Aspect check -------', () => {

    // assert.typeOf
    let username = "Coder";
    it("Check String", () => {
        assert.typeOf(username, 'string')
    })

    let serialNumber = 2336;
    it("Check Number", () => {
        assert.typeOf(serialNumber, 'number')
    })


    let isValue = false; // 'false';
    it("Check Boolean", () => {
        assert.typeOf(isValue, 'boolean');
    })

    // assert.equal
    let str1 = "abc";
    it("Equal match", () => {
        assert.equal(str1, "abc");
    })


    // assert.lengthOf
    let myList = {
        item: [{ id: 1011 }, { id: 1022 }],
        title: "User list"
    }
    it("Check length", () => {
        assert.lengthOf(myList.item, 2);
    })
})




// ###########  SHOULD  ############ //

describe(" ------- Should Check -------- ", () => {


    // Check datatype
    let isVerified = true;
    it("Check Boolean", () => {
        isVerified.should.be.a("boolean");
    })

    let pincode = '457001';
    it("Check String", () => {
        pincode.should.be.a('string');
    })

    // Equal match (Case Sensitive)
    let name = "Imran";
    it('Equal Check', () => {
        name.should.be.equal('Imran');
    })


    // Check length
    let myList = {
        item: [
            { id: 1 },
            { id: 2 }
        ],
        title: "Users list"
    }

    it('Check length', () => {
        myList.should.have.property('item').with.length(2);
    })
})





// #########  EXPECT  ######### //

describe(' -------- Expect Check --------- ', () => {

    let username = "Code Improve";
    let myList = {
        item: [
            { id: 1011 }, { id: 1022 }
        ],
        title: "Users list",

        address: {
            country: "USA",
            phoneNumbers: ["985623", "875420"]
        }
    }


    it('Match String', () => {
        expect(username).to.be.a('string');
    })

    it('Equal Match', () => {
        expect(username).to.equal('Code Improve');
    })

    it('Length Match', () => {
        expect(username).to.lengthOf(12);
    })

    it('Object Length', () => {
        expect(myList).to.have.property('item').with.lengthOf(2);
    })

    it('Keys object match', () => {
        expect(myList).to.have.all.keys('item', 'title', 'address');
    })

    it('phone number', () => {
        expect(myList).to.have.nested.property('address.phoneNumbers[1]')
    })

    it('Country name', () => {
        expect(myList).to.have.nested.include({ 'address.country': 'USA' })
    })
})