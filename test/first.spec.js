let assert = require('assert');

describe('Array', function () {
    describe('#indexOf()', function () {
        it(`should return -1 when the value is not present`,
            function () {
                assert.equal([1, 2, 3].indexOf(2), 1); // Index of number 2 is 1 or not
            })
    })
})


// My test cases
describe('My first test case', () => {
    // 1st
    it('check 1st value', () => {
        assert.equal([1, 2, 3].indexOf(3), 2)
    })

    //2nd
    it('check 2nd value', () => {
        assert.equal([5, 6, 7, 8, 9].indexOf(8), 3)
    })
})