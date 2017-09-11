"use strict";
// var obj1: { foo: boolean } = { foo: true };
// var obj2: {
//   foo: number,
//   bar: boolean,
//   baz: string,
// } = {
//   foo: 1,
//   bar: true,
//   baz: 'three',
// };
// var obj3 = {};
// obj3.newProp = '';
// function test(param1: { name: string }) {
//   return param1.name;
// }
// test({ name: 'John', age: 1 });
// let array = [1, 2, 3];
// array[3] = '';
// class MyClass<A, B, C> {
//   property: A;
//   method(val: B): C {
//     // ...
//   }
// }
var obj1 = { foo: 1, bar: true, baz: 'three' };
var obj2 = { foo: 42, bar: false, baz: 'hello' };
var arr1 = [1, 2, 3];
var arr2 = [3, 2, 1];
var MyClass = (function () {
    function MyClass() {
    }
    return MyClass;
}());
function test(param1) {
    console.log(param1.prop1.toString());
}
test(new MyClass());
