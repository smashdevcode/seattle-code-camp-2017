
'use strict';

// Example 1

function f(throwError: boolean = false) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (throwError) {
        console.log('f() threw an error!');
        reject(Error('Error from f()'));
      } else {
        console.log('f() done!');
        resolve();
      }
    }, 2000);
  });
}

function x() {
  f();
  console.log('After call to f()');
}

// function x() {
//   f().then(() => {
//     console.log('After call to f()');
//   }).catch(error => {
//     console.error(error);
//   });
// }

// async function x() {
//   try {
//     await f();
//     console.log('After call to f()');    
//   } catch (error) {
//     console.error(error);
//   }
// }

x();

// Example 2

// function f(value: string, throwError: boolean = false) {
//   return new Promise<void>((resolve, reject) => {
//     setTimeout(() => {
//       if (throwError) {
//         console.log(`f() threw an error processing value '${value}'!`);
//         reject(Error('Error from f()'));
//       } else {
//         console.log(value);
//         resolve();
//       }
//     }, 2000);
//   });
// }

// // This doesn't work

// function x(values: string[]) {
//   for (let value of values) {
//     f(value);
//   }
//   console.log('All done!');
// }

// // Using recursion

// // function x(values: string[], index: number = 0) {
// //   if (index < values.length) {
// //     f(values[index], true).then(() => {
// //       x(values, index + 1);
// //     }).catch(error => {
// //       x(values, index + 1);      
// //     });
// //   } else {
// //     console.log('All done!');
// //   }
// // }

// // Use reduce

// // function x(values: string[]) {
// //   let sequence = values.reduce((sequence, value) => {
// //     return sequence.then(() => {
// //       return f(value);
// //     }).catch(error => {
// //       // Do nothing... just handle the error.
// //     });
// //   }, Promise.resolve());
// //   sequence.then(() => console.log('All done!'));
// // }

// // Using async/await

// // async function x(values: string[]) {
// //   for (let value of values) {
// //     try {
// //       await f(value);      
// //     } catch (error) {
// //       // Do nothing... just handle the error.      
// //     }
// //   }
// //   console.log('All done!');
// // }

// x(['One','Two','Three','Four']);
