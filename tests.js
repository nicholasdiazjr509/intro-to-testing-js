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
        expect(typeof sayHello()).not.toBe('undefined');
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


describe('isFive', function () {
    it('should be defined as an empty function', function () {
        expect(typeof isFive).toBe('function');
    })
    it('should  pass in the string 5? ', function () {
        expect(typeof isFive(5)).toBe('boolean');
        //Ensure that isFive returns a boolean no matter what the input

    })
    it("should return a boolean when passed a empty string ", function() {
        expect(typeof isFive('')).toBe('boolean');
//Ensure that isFive returns true when passed 5


    })
})
// //#11
describe('isEven', function () {
    it("should be a defined as a function", function () {
        expect(typeof isEven).toBe('function');
    })

    it('returns a boolean no matter the input', function () {
        expect(typeof isEven()).toBe('boolean');

    })
    it('returns true when executed with isEven(2)', function () {
        expect(typeof isEven ('2')).toBe('boolean');
    })
    it ('returns true when executed with isEven(-4)', function(){
        expect(typeof isEven('-4')).toBe('boolean');

    })
})