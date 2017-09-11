
# Presentation

## Session Information

### Hey... You Got Static Types in My JavaScript!

As JavaScript applications continue to grow in size and complexity, the teams that develop and support them often find themselves looking for ways to help increase productivity and reduce errors. A well-known practice for reducing coding errors is to employ unit testing. A more recent approach is to add static typing to JavaScript by utilizing technologies like Microsoft's TypeScript or Facebook's Flow.

Adding static types to JavaScript helps developers to detect errors in their code at design time, without having to execute their code. Static typing dramatically improves the overall development experience by adding support for symbol-based navigation, statement completion, and code refactoring.

In this talk, we'll walk through a series of demos showcasing how TypeScript and Flow bring static typing to JavaScript. We'll look at how they are similar, how they differ, how they can help you write better code, and how they won't. By the end of this talk, you'll be on your way to answering the question "are static types a good fit for my JavaScript project?"

Topics include:

* Comparing static and dynamic typing
* Reviewing the benefits and disadvantages of static and dynamic typing
* Leveraging TypeScript and Flow in your projects
* Comparing TypeScript and Flow

Goals:

* Give you a sense of what static typing is and what it can and can't do
* Encourage you to take a deeper look at static typing in JS

## Hello

* Anybody using Flow or TypeScript today?
* Who's interested in learning more about Flow? TypeScript?

## A Brief History of JavaScript

### May 1995 - JavaScript

* JavaScript is famously created by Brendan Eich in 10 days while working for Netscape
* Initially used to add (some) interactivity to web pages
* Writing code that worked in all of the popular browsers was difficult to do

### January 2006 - jQuery

* jQuery is released at BarCamp NYC by John Resig
* Nothing short of a revelation
* Made cross-browser implementations easy to do
* More JS is written than ever before
* More and more app logic is moved into the client
* With jQuery and AJAX, the idea of a "single page app" begins to take hold

### October 2010 - AngularJS

* AngularJS is released and gives developers a complete, opinionated framework for building SPAs
* With Node.js on the backend, entire applications are being written in JavaScript
* The flood gates have been opened
* New JavaScript libraries, frameworks, and tools started to emerge at a pace that nobody can keep up with
* JavaScript fatigue sets in

## The Evolution of JavaScript

* JS apps get larger and larger and more and more complex
* Developers begin to not be able to track everything in an app
* JavaScript can become a "write-only" language
* Poor unit test code coverage or tooling support

## What Are Machines Good At?

* But why are we struggling with this?
* Why not leverage machines to help analyze code?
* Why don't we have a compiler for JavaScript?

## New Languages

* What about a new language that compiles to JS?
* Haxe, Dart, and Opa
* Offer static typing and compile down to JavaScript
* But these require developers to learn something completely new
* So, then ultimately don't get traction

## Static Types + JS?

* How about adding static typing to JS?
* In October 2012, MS announces TypeScript, a statically typed superset of JavaScript
* And in September 2014, Facebook introduces Flow

## Dynamic vs Static Typing

* What do we mean by static typing?
* Let's explore how types work in JS

## JavaScript's Type System

* First off, does JavaScript have a type system?
 * Yes! JavaScript has a type system

### Primitive Types

* Boolean
* Null
* Undefined
* Number
* String
* Symbol (new in ES6)

### And Object!

* Objects can be seen as a collection of properties
* JS includes a set of standard, built-in objects
 * Date
 * Array
 * And more!

## Dynamic Typing

"Dynamically typed languages are generally interpreted, thus type checking (if any) happens at run time when they are used. A programming language is said to use static typing when type checking is performed during compile-time as opposed to run-time. In static typing, types are associated with variables not values." - Wikipedia

* Sometimes referred to as loose typing
* Types are defined at runtime
* Types are associated with values
* A variable/property's type can change over time
* Types can be checked at runtime in order to write type safe code

## Demo: Dynamic Typing in JS

* Show a simple example of how dynamic or loose typing works in JS
* Variables and function parameters
* Call a simple `add` function with a variety of parameters
* Variable, parameter, property types can change at runtime
* Variables, parameters, and properties are not guaranteed to have values
* Object properties are not guaranteed to be defined
* Use the `typeof` function to show the type information at runtime

## Advantages and Disadvantages

* Advantages
 * Flexible
 * Fast development
 * Enables certain scenarios
* Disadvantages
 * Easy to make mistakes
 * Lots of defensive coding
 * Can be confusing at times (especially if you're coming from a language like C#)
 * Difficult to refactor code (unit tests can help here)
 * Poor discoverability

## Static Typing

* Types are defined at design time
* Types are associated with variables, parameters, and properties
* Static analysis supercharges our dev environments
 * True intellisense (not simple autocomplete)
 * Symbol based navigation (improved code discoverability and navigation)
 * Refactoring support
* Catch simple errors at design time
* Sacrifice some flexibility in order to have predictability

## Adding Static Typing to JavaScript

* We need a way to add type information to our code
 * Show example of the syntax
* We need to remove type information before our code is executed
 * Type information should evaporate
* We need a static typing system that models how JS works (or at least how we want it to work ideally)

### Flow

* Works with regular vanilla JavaScript
* (Optional) static typing
* Doesn't touch your JS... at all!

### TypeScript

* Superset of JavaScript
* (Optional) static typing
* Features from the future

## Demo: Static Types in Flow

* Implicit typing with type inference
* Explicit typing
* Type checking only
* Types must be removed from source code

## Demo: Static Types in TypeScript

* Types work similar to Flow
* Type inference is a little different
* Type checking and transpilation
 * This allows you to use new features today
 * Flow relies upon Babel for transpilation

## Flow Setup

* You need to setup a compiler to strip away Flow types
 * Two common options are Babel and flow-remove-types
* Install Flow
* Configure VS Code

### Flow Usage

* Initialize your project with `flow init`
* Start the Flow background process with `flow`
* Determine which files Flow will monitor with `// @flow`
* Write Flow code for your project
* Check your code for type errors

#### Project Initialization

```
flow init
```

* Adds a `.flowconfig` file to the root of your project
 * This file tells the Flow background process where to begin checking for errors (i.e. the root of your project)
* It's very common for this file to be empty, but many configuration options exist
 * https://flow.org/en/docs/config/

#### Flow Background Process

* Monitors changes to your project's files
* This allows calls to `flow status` or simply `flow` to be nearly instantaneous

#### Prepare Your Code for Flow

```
// @flow
```

#### Write Flow Code

You can now add type annotations to your code

#### Check Your Code

* The Flow background process continuously monitors your code
* You can check the status of your code by running the `flow` or `flow status` commands

## TypeScript Setup

### Installation

Install TypeScript globally...

```
npm install -g typescript
```

### Configuring VS Code

Nothing to do... works out of the box!

### TypeScript Usage

* Initialize your project with `tsc -init`
* Write TS code for your project
* Compile your project using `tsc`

## Migration

* With both Flow and TS you can gradually migrate projects
* Allows you to start with migrating just part of a larger project
* Start with code that has a lot of references
 * Add type information to the external members

### Flow

* By default Flow only checks the files that you include
* This allows you to gradually migrate a project
* But errors aren't reported in non-checked files

### TypeScript

* You can configure TS to check JS files
 * When combined with JSDoc comments this starts to feel like Flow
 * Though you still don't provide inline type information in JS files!
* You can also mix JS and TS files
 * If JS checking is enabled, then errors will be reported from JS
* You can also use d.ts files to provide type information for JS files
 * Only works if you're using modules

## Which Do I Choose?

* If you're already using Babel, Flow might be a good fit
 * Flow doesn't touch your code
 * Flow relies upon Babel to remove type information
* If you're using React, Flow might be a natural fit
 * Though TS plays well with React as well
* If you're not using a transpiler, take a look at TS
* If tooling support is the main motivator, consider TS
* If you're using Angular, consider TS

## Challenges

* Type information for external libraries and frameworks
* Changing your build process
* Training your team
* Feeling constrained by static types
 * Sometimes adding type information can feel like a detour or distraction from being writing code and being productive
* Flow doesn't seem to support JavaScript without modules as well as TypeScript does
* Some JS code or design patterns can be difficult to properly static type
 * This is happening less and less often
* Best case is to have unit tests for that code so you can refactor it to use static types and know that you haven't changed it's intent or behavior

## What Static Typing Doesn't Help With

What doesn't static typing help with?

### Static Typing Doesn't Validate All Runtime Behavior!

Static typing doesn't validate all runtime behavior!

### Example #1

While Flow and TS can check that elements of an array are consistent, they don't attempt to check if an array access is safe...

```
let array: number[] = [0, 1, 2];
let value: number = array[3]; // Works.
                       // ^ undefined
```

### Example #2

```
function add(num1: number, num2: number) {
  return num1 - num2;
}

let result = add(1, 2); // result = -1
```

## Learn JavaScript... Properly

* If you're relatively new to JS don't let static typing be a crutch
* For example, if you're a C# dev, using TS can give you a false sense of security
* Recent versions of TS has only made this worse with the additions of abstract classes, properties, and methods
* Actually learn JS... you can do it... and it'll be totally worth it

## The Future

* Will we see static typing added to ECMAScript?
* How will Flow and TS continue to evolve?
 * Both have gotten substantially better since they were released
 * Both projects have seemed to influence the other

### Flow GitHub Pulse

### TypeScript GitHub Pulse

## Do I Need Static Typing?

* Not every project is a good fit for static typing
 * Sometimes you just want to write vanilla JS
* Just like with any tool, only use it when it makes sense to do so
* Good unit testing can help... a lot
 * But not every project has good unit test coverage
 * No amount of unit tests will improve your tooling

### Resources

* Official Flow Website - [https://flow.org/](https://flow.org/)
* Official TS Website - [www.typescriptlang.org/](http://www.typescriptlang.org/)
* Basarat Ali Syed's TypeScript Deep Dive Book - [basarat.gitbooks.io/typescript/](http://basarat.gitbooks.io/typescript/)
* Portland TypeScript Meetup - [typescriptpdx.com/](http://typescriptpdx.com/)

### Thanks!

* James Churchill
* Treehouse: https://teamtreehouse.com/jameschurchill
* Twitter: @SmashDev
* GitHub: smashdevcode
