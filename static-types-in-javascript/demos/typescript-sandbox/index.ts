
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



let obj1 = { foo: 1, bar: true, baz: 'three' };
let obj2: typeof obj1 = { foo: 42, bar: false, baz: 'hello' };

let arr1 = [1, 2, 3];
let arr2: typeof arr1 = [3, 2, 1];



// let x: string;
// console.log(x);



// class MyClass {
//   prop1: string;
// }

// let myClass = new MyClass();
// //myClass.prop1 = 'Hello world!';

// console.log(myClass.prop1);



interface MyInterface {
  prop1: number;
}

class MyClass implements MyInterface {
  prop1: number;
}

function test(param1: MyInterface) {
  console.log(param1.prop1.toString());
}

test(new MyClass());



