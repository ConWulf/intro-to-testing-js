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

 function isVowel(input) {
    var vowel = "a, e, i, o, u, A, E, I, O, U";
    for (var i = 0; i < vowel.length; i++){
        return vowel.includes(input);
    }
 }

 // function add(x, y) {
 //    if (x === -3 && y === -9) {
 //        return -12;
 //    } else if(x === "5" && y === 6) {
 //        return 11;
 //    } else if(x === "-4" && y === "10") {
 //        return 6;
 //    }
 //     return 5;
 // }

 // function add(x, y) {
 //    if(x === "banana" && y === "split") {
 //        return "NaN";
 //    } else if(x === 2 && y === "apple") {
 //        return "NaN"
 //    }
 //     return parseFloat(x) + parseFloat(y);
 // }

 function add(x, y) {
     if(isNaN(x) || isNaN(y)) {
         return "NaN";
     }
     return parseFloat(x) + parseFloat(y);
 }

