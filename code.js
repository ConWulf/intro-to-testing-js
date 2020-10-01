 // helloWorld function
// const helloWorld = function() {
//     return "Hello, World!";
// }

function helloWorld() {
    return "Hello, World!";
}
 
 //define sayHello function
 // function sayHello(name) {
 //    if (name === "Alex") {
 //        return "Hello, Alex!"
 //    } else if (name === "Pat") {
 //        return "Hello, Pat!"
 //    }
 //    return "Hello, Jane!";
 // }
 // refactor sayHello function
 function sayHello(name) {
    if (typeof  name === "undefined" || typeof name === "boolean") {
        return "Hello, World!";
    }
    return "Hello, " + name + "!";
 }

 function isFive(num) {
    if(num === 5) {
        return true;
    }
    return false;
 }
 function isEven(num) {
    if(typeof num === "boolean") {
        return false;
    }
   return parseInt(num) % 2 === 0;
 }


