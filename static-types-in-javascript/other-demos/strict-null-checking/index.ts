
// With strict null checking enabled...
// 1) `null` and `undefined` are sheared off of the built-in types
//   a) `null` and `undefined` are now their own unary types
// 2) Types that don't include `undefined` must be assigned a value before they can be used.

// let a: number;
// console.log(a); // error - `a` must be assigned a value before it can be used

// let b: number | null = null;
// console.log(b);

// We can write functions that absolutely require a value.

// function requiresParameterValue(param1: number) {
//   return param1 * 2;
// }

// requiresParameterValue(null); // error - `null` not assignable to `number`
// requiresParameterValue(); // error - must pass a parameter value

// We can also write functions that allow `null` or `undefined`
// and check for those values within the function body

// function allowsNulls(param1: number | null) {
//   if (param1 === null) {
//     param1 = 0;
//   }

//   return param1.toString();
// }

// function allowsNullsOrUndefined(param1?: number | null) {
//   if (!param1) {
//     param1 = 0;
//   }

//   return param1.toString();
// }

// let result1 = allowsNulls(1); // okay
// let result2 = allowsNulls(null); // okay
// let result3 = allowsNulls(); // error

// let result4 = allowsNullsOrUndefined(1); // okay
// let result5 = allowsNullsOrUndefined(null); // okay
// let result6 = allowsNullsOrUndefined(); // okay
