


//import {someFunction} from './test';
const { someFunction } = require('./test');

let result = someFunction('asdf');

let x;
console.log(x);

class MyClass {}

let myClass = new MyClass();
myClass.prop1 = 'Hello world!';

console.log(myClass.prop1);

// function square(n: number): number {
//   return n * n;
// }

// square("2"); // Error!

// function square(n) {
//   return n * n; // Error!
// }

// square('2');

// function concat(a, b) {
//   return a + b;
// }

// function concat(a: string, b: string) {
//   return a + b;
// }

// let result1 = concat('', '');
// let result2 = concat('', 1);
// let result3 = concat(1, 1);

// function add(a: number, b: number) {
//   return a + b;
// }

// let result1 = add(1, 2);
// let result2 = add(null, null);

// let a = 1;

// a = true;
// let b: boolean = a;

// interface Test {
//   prop1: string;
// }

// class MyClass {
//   prop1: string;
//   prop2: number;
// }

// function myFunc(param1: Test) {  
// }

// myFunc(new MyClass());
// myFunc({ prop1: 'Hello' });

// function test(param1: {| name: string |}) {
//   return param1.name;
// }

// test({ name: 'John', age: 1 }); // Error! `age` property not found on object type.

// let array = [1, 2, 3];
// array[3] = '';
// array[4] = true;

// let value1 = array[0];
// let value4 = array[3];
// let value5 = array[4];


// function toStringPrimitives(value: number | boolean | string): string { // Error!
//   if (typeof value === 'number') {
//     return String(value);
//   } else if (typeof value === 'boolean') {
//     return String(value);
//   }
// }