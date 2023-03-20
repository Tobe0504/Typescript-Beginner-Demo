"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Welcome back";
console.log(message);
var x = 10;
var y = 20;
var title = "Tobe's first typescript run";
var isBeginner = true;
var total = 30;
var name = "Tobenna";
var sentence = "My name is ".concat(name, "\nAnd I am a beginner in Typescript");
var n = null;
var u = undefined;
var list1 = [1, 2, 3, 4, 5];
var list2 = [1, 2, 3, 4, 5];
var person1 = ["Tobe", 22];
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Blue"] = 1] = "Blue";
    Colors[Colors["Green"] = 2] = "Green";
})(Colors || (Colors = {}));
var c = Colors.Green;
var randomValue = 10;
randomValue = true;
randomValue = "This is a test for random values";
var myVariable = 10;
myVariable.toUpperCase();
// When the value from here is not under your control
var multiType;
multiType = 20;
multiType = true;
// Functions
var add = function (num1, num2) {
    if (num1 && num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
};
add(10, 5);
add(5);
var fullName = function (person) {
    console.log(person.firstname, person.lastName);
};
var arinze = { firstname: "Tobenna", lastName: "Ezimorah" };
fullName(arinze);
console.log(c);
console.log(sentence);
