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

