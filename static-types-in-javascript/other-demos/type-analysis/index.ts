
// Control flow based type analysis allows us to definitely know
// what a parameter (or variable) type is even if it changes.
// This allows us to write JavaScript code in more of a natural way 
// instead of being unnecessarily restricted by static types.

function foo(x: string | number | boolean) {
    if (typeof x === "string") {
        x; // type of x is string here
        x = 1;
        x; // type of x is number here
    }
    x; // type of x is number | boolean here
}

function bar(x: string | number) {
    if (typeof x === "number") {
        return;
    }
    x; // type of x is string here
}
