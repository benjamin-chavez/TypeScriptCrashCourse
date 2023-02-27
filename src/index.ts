// // Regular JS
// let idJS = 5;

// // TS
// let idTS: number = 5;

// idTS = 6;

// console.log('ID:', idTS);

// Basic Types
let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;
let x: any = 'Hello';

// Intialize without assignment
let age: number;
age = 30;

// Number Array
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, 'Hello'];

// Tuple
let person: [number, string, boolean] = [1, 'String', true];

// Tuple Array
let employee: [number, string][];
employee = [
  [1, 'Ben'],
  [2, 'The'],
  [3, 'Hen'],
];

// Union
// Allows variables to hold more than one type
let myUnion: string | number;
myUnion = 'Union String';

let myUnion2: string | number = 22;

// Enums
enum DirectionEnum {
  Up,
  Down,
  Left,
  Right,
}

console.log(DirectionEnum.Up);
console.log(DirectionEnum.Left);

enum DirectionStrEnum {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

console.log(DirectionStrEnum.Up);
console.log(DirectionStrEnum.Left);

// `TYPE` OBJECTS
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: 'John',
};

// ALternative Object Syntax
type UserObj = {
  id: number;
  name: string;
};

const userObj: UserObj = {
  id: 1,
  name: 'John',
};

// TYPE ASSERTION
// Changes an `any` type variable to a sepcific type (i.e. a number)
let cid: any = 1;
// The following two lines are equivalent
let customerId = <number>cid;
let customerId2 = cid as number;

// Functions
function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 2));

function logFunc(message: string | number): void {
  console.log(message);
}

logFunc('this is a logFunc!');

// INTERFACES
// Custom type (I Think maybe like a struct?)
interface myInterface {
  id: number;
  name: string;
}

// Object vs Interface
type UserObject = {
  id: number;
  name: string;
};

const user1: UserObject = {
  id: 1,
  name: 'John',
};

// Interface:
interface UserInterface {
  id: number;
  name: string;
}

const user2: UserInterface = {
  id: 1,
  name: 'John',
};

// Type: Can be used with primatives and/or unions
type Point = number | string;
const p1: Point = 1;

// You can't use primatives or unions with Interfaces

// Interfaces with Optional Properties:
interface interfaceWithOptionalProperties {
  prop1: number;
  prop2?: number; // <= prop2 is optional
}

// Interfaces with READ ONLY properties:
interface interfaceWithReadOnlyProp {
  prop1: number;
  readonly prop2: number; // <= prop2 is readonly
}

// Interface with Functions
interface interfaceWithFunction {
  (x: number, y: number): number;
}

// ex:
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

// Classes:
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  private id: number;
  protected name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered!`;
  }
}

const ben2 = new PersonPrivate(1, 'Ben Chavez');
console.log(ben2.register());

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person2 implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered!`;
  }
}

// SUBCLASSES (EXTENDING CLASSES)
class Employee extends Person2 {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, 'Brad T.', 'Instructor');
console.log(emp.register());

// GENERICS - Example to Add Generic Declaration Placeholder to allow us to define types in function calls
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(['a', 'b', 'c', 'd']);

numArray.push(123);
