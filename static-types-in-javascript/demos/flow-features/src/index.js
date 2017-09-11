
// Example #1: Variables

let x;
x = 'asdf';
x = 1;
x = true;
x = {};
x = null;
x = undefined;

// Example #2: Functions and Parameters

function add(param1, param2) {
  console.log(`param1 value: ${param1}, type: ${typeof(param1)}`);
  console.log(`param2 value: ${param2}, type: ${typeof(param2)}`);

  let result = param1 + param2;
  console.log(`result value: ${result}, type: ${typeof(result)}`);

  return result;
}

let result1 = add(1, 2);
let result2 = add('asdf', 'asdf');
// let result3 = add(true, false);
// let result4 = add({}, {});
// let result5 = add();
// let result6 = add(1);
// let result7 = add(1, 2, 3);

// Example #3: Objects and Classes

let obj = {};
obj.name = 'John';

class MyClass {
  constructor(name) {
    this.name = name;
  }
}

let myClassInstance = new MyClass('Sally');
console.log(myClassInstance.name);
console.log(myClassInstance.age);
