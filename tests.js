// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe('sayHello', function (){
    it('should be defined as a function', function (){
        expect(typeof sayHello).toBe('function');  //test for sayHello function
    })
    it('should never return undefined', function (){
        expect(typeof sayHello()).not.toBe('undefined')
    })
    it('should return a string', function (){
        expect(typeof sayHello()).toBe('string');

    })
    it('should return a greeting for the input', function (){
        expect(sayHello('Nick')).toBe('Hello Nick');
        //expect(sayHello('Bob')).toBe('Hello Bob');
    })
})
// Exercise #10 Let's Test-Drive an isFive function!
// Inside of tests.js, write a describe block for our new isFive function.
// As your first, failing test, write an it and an expect asserting that a function named isFive exists.
//    Run the tests by refreshing report.html to show the red, failing test.
//    Write just enough code inside of code.js to define an empty function for isFive.
//    Now, refresh report.html to ensure that all tests are green.
//    What other tests and implementation cycles should you do for isFive?
//    Ensure that isFive returns a boolean no matter what the input
//      Ensure that isFive returns true when passed 5
// What about if we pass in the string "5"?
// Do you want isFive to return true for that?
//    If so, write the test, ensure that the test is failing, and then write the implementation
// Commit your work to git and push to GitHub before moving forward.

describe('isFive', function () {
    it('should be defined as an empty function', function () {
        expect(typeof isFive).toBe('function');
    })
    it('should  pass in the string 5? ', function () {
        expect(typeof isFive(5)).toBe('boolean')
        //Ensure that isFive returns a boolean no matter what the input
    })
        it('should return a false when a 5 is passed', function(){
            expect( typeof isFive(5) .toBe(''))
    })
    it("should return true or false when passed a '5' ", function() {
        expect(typeof isFive('')).toBe('boolean')
//Ensure that isFive returns true when passed 5


    })
})
// //#11
// describe('isEven', function (){
//     it ("should be a defined function", function(){
//         expect(typeof isEven(n % 2 == 0)).toBe('function')
// })
//
// it('should return a boolean value when passed any number', function () {
//     expect(typeof isEven()).toBe('boolean');
// })