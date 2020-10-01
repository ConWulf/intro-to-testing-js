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

//create unit test for sayHello function
describe("sayHello", function () {
    it("should be a defined function", function () {
        expect(typeof sayHello).toBe("function")
    });
    it("should return a string", function (){
        expect(typeof sayHello()).toBe("string");
    });
    it("Should return the string 'Hello, Jane!' when passed the string  'Jane'", function (){
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("Should return the string 'Hello, Alex' when passed the string 'alex'", function (){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("Should return the string 'Hello, Pat!' when passed the string 'Pat'", function (){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should not return 'undefined' when called", function () {
        expect(sayHello()).not.toBe("undefined");
    });
    it("Should return 'Hello, World!' when called", function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when passed a true" , function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });;
});

describe("isFive", function () {
    it("should be a defined function", function () {
        expect(typeof isFive).toBe("function");
    });
    it("should return a boolean", function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it("should return true if passed the number 5", function () {
        expect(isFive(5)).toBe(true);
    });
    it("should return false when passed the string '5'", function () {
    expect(isFive("5")).toBe(false);
    });
})

describe("isEven", function (){
    it("should be a defined function", function () {
        expect(typeof isEven).toBe("function")
    });
    it("Should return true when passed a value of 2", function () {
        expect(isEven(2)).toBe(true);
    });
    it("Should return true when passed a value of -4", function () {
        expect(isEven(-4)).toBe(true);
    });
    it("Should return false when passed a value of 3", function () {
        expect(isEven(3)).toBe(false);
    });
    it("Should return false when passed 'banana'", function () {
        expect(isEven("banana")).toBe(false);
    });
    it("Should return true when passed the string '8'", function () {
        expect(isEven("8")).toBe(true);
    });
    it("Should return false when passed Infinity", function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it("Should return false when passed a false", function () {
        expect(isEven(false)).toBe(false);
    });
    it("Should return false when passed a true", function () {
        expect(isEven(true)).toBe(false);
    });
    it("Should return false when passed no argument", function () {
        expect(isEven()).toBe(false);
    });
})

describe("isVowel", function () {
    it("should be a defined function", function () {
        expect(typeof isVowel).toBe("function");
    });
    it("should return a boolean", function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it("should return true when passed 'a'", function () {
        expect(isVowel("a")).toBe(true);
    });
    it("should return true when passed 'A'", function () {
        expect(isVowel("A")).toBe(true);
    });
    it("should return false when passed 'y'", function () {
        expect(isVowel("y")).toBe(false);
    });
    it("should return false when passed 4", function () {
        expect(isVowel(4)).toBe(false);
    });
    it("should return false when passed true", function () {
        expect(isVowel(true)).toBe(false);
    });
    it("should return false when passed false", function () {
        expect(isVowel(false)).toBe(false);
    });
    it("should return false when passed the string 'banana'", function () {
        expect(isVowel("banana")).toBe(false);
    });
    it("should return false when passed no argument", function () {
        expect(isVowel("banana")).toBe(false);
    });
    it("should return true when passed 'o'", function () {
        expect(isVowel("o")).toBe(true);
    });

})