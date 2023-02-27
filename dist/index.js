"use strict";
// // Regular JS
// let idJS = 5;
// // TS
// let idTS: number = 5;
// idTS = 6;
// console.log('ID:', idTS);
// Basic Types
let id = 5;
let company = 'Traversy Media';
let isPublished = true;
let x = 'Hello';
// Intialize without assignment
let age;
age = 30;
// Number Array
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'String', true];
// Tuple Array
let employee;
employee = [
    [1, 'Ben'],
    [2, 'The'],
    [3, 'Hen'],
];
// Union
// Allows variables to hold more than one type
let myUnion;
myUnion = 'Union String';
let myUnion2 = 22;
// Enums
var DirectionEnum;
(function (DirectionEnum) {
    DirectionEnum[DirectionEnum["Up"] = 0] = "Up";
    DirectionEnum[DirectionEnum["Down"] = 1] = "Down";
    DirectionEnum[DirectionEnum["Left"] = 2] = "Left";
    DirectionEnum[DirectionEnum["Right"] = 3] = "Right";
})(DirectionEnum || (DirectionEnum = {}));
console.log(DirectionEnum.Up);
console.log(DirectionEnum.Left);
var DirectionStrEnum;
(function (DirectionStrEnum) {
    DirectionStrEnum["Up"] = "Up";
    DirectionStrEnum["Down"] = "Down";
    DirectionStrEnum["Left"] = "Left";
    DirectionStrEnum["Right"] = "Right";
})(DirectionStrEnum || (DirectionStrEnum = {}));
console.log(DirectionStrEnum.Up);
console.log(DirectionStrEnum.Left);
// `TYPE` OBJECTS
const user = {
    id: 1,
    name: 'John',
};
const userObj = {
    id: 1,
    name: 'John',
};
// TYPE ASSERTION
// Changes an `any` type variable to a sepcific type (i.e. a number)
let cid = 1;
// The following two lines are equivalent
let customerId = cid;
let customerId2 = cid;
// Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function logFunc(message) {
    console.log(message);
}
logFunc('this is a logFunc!');
const user1 = {
    id: 1,
    name: 'John',
};
const user2 = {
    id: 1,
    name: 'John',
};
const p1 = 1;
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
// Classes:
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const ben = new Person(1, 'Ben Chavez');
const mike = new Person(1, 'Mike Jordan');
console.log(ben, mike);
// Class Access Modifiers
//  Private: You can only access from within the class
//  Protected: You can only access from within the class itself or any extensions of that class
class PersonPrivate {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered!`;
    }
}
const ben2 = new PersonPrivate(1, 'Ben Chavez');
console.log(ben2.register());
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered!`;
    }
}
// SUBCLASSES (EXTENDING CLASSES)
class Employee extends Person2 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Brad T.', 'Instructor');
console.log(emp.register());
// GENERICS - Example to Add Generic Declaration Placeholder to allow us to define types in function calls
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['a', 'b', 'c', 'd']);
numArray.push(123);
//# sourceMappingURL=index.js.map