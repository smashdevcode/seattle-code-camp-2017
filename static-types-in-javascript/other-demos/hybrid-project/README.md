
# Demos

## Overview of the Demo App

* The demo app is an ASP.NET Core configured to serve static files
* The app is intentionally simple and small
 * Please imagine that this is just a slice of a much bigger application
 * Multiply everything that we see by a factor of 10
* JavaScript files
 * Models... Version and Framework... one ES2015 class and one constructor function
 * data.js... provides the `getData` method
 * app.js... calls the `getData` method, builds up a string of HTML, and appends that string to the DOM
* The app is using jQuery...
 * Though not in a very interesting way
 * Mostly just as a way to show you the support that VS Code gives you for external libraries

## JS Editor in VS Code

Let's take a look at the JS editor in VS Code

* Hover over a function and see information about that item
 * What is the `: any` notation?
* Navigate to the definition of an item in the same file
* Navigate to the definition of an item in a different file... as long as the file is open

How do we fix this?

## JavaScript Project

Add a `jsconfig.json` file to the root of the project

```
{
	"compilerOptions": {
		"target": "es6"
	},
	"include": [
		"wwwroot/scripts"
	]
}
```

CMD+SHIFT+P to open the command palette and select "TypeScript: Reload Project"

And now we can navigate to items in files that aren't currently open!

## More JS Editor in VS Code

* Peek the definition
* Find all references
 * Show the trying to find reference to `Version.name` doesn't work
* Renaming support
 * Again... mostly works
 * But unable to rename the `Version.name` property
* You can also catch certain bugs with
 * `noFallthroughCasesInSwitch`
 * `allowUnreachableCode`

## IntelliSense for External Libraries

VS Code will also provide us with IntelliSense for external libraries like jQuery

* Automatic type acquisition works for any packages listed in your package.json file
* We're currently using Bower to manage our client-side packages so we'll need to explicitly list the packages that we want to acquire typings for

```
"typeAcquisition": {
  "include": [
	  "jquery"
	]
}
```

And now we have IntelliSense for jQuery!

## VS Code JS Editor and the TypeScript Language Service

* So, how is VS Code able to do all of this?
* In addition to a compiler, TypeScript provides a language service that can be used by editors or IDEs to introspect into your code
* The TypeScript Language Service is being used to supercharge the JS editor
 * That's how the IntelliSense is working... it's not just a simple autocomplete, i.e. you've typed this before
 * That's also how refactoring is being supported
* This is being done for us automatically, under the covers... without having to compile our code
* VS 2017 Proper now uses the TS Language Service

## Refining Type Information - Part 1

* When we hover over a function VS Code will display information about that item
* The keywords after the colons ":" indicate the expected data types
* Notice that the function parameters are marked as `any`
 * This means that we can pass any data type
 * That's probably not what the author of this function intended
* We can use JSDoc comments to refine the data types
 * This helps us express the intent of our code
 * We also get better IntelliSense

```
/**
 * Adds a supported framework.
 * @param {string} name - The name of the framework.
 * @param {number} versionNumber - The version number of the framework.
 */
```

## Down-level Compilation

We can benefit further from TypeScript by leveraging the TypeScript compiler

* Move input files into a "Client" folder
* Update the `jsconfig.json` file
 * Set `target` to `es5` to downlevel compile our JS files
 * Set `outDir` to the output folder `wwwroot/scripts`
 * Add `include` property and include the "Client" folder

```
{
	"compilerOptions": {
		"target": "es5",
		"outDir": "wwwroot/scripts"
	},
	"include": [
		"Client"
	]
}
```

And to compile the JS project, run this command:

```
tsc -p jsconfig.json
```

Or we can press CMD+SHIFT+B in VS Code to configure the task runner

```
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "0.1.0",
  "command": "tsc",
  "isShellCommand": true,
  "args": ["-p", "./jsconfig.json"],
  "showOutput": "silent",
  "problemMatcher": "$tsc"
}
```

Or we can hook into the ASP.NET Core MSBuild precompile build event

```
<Target Name="PreCompileTarget" BeforeTargets="Build">
  <Exec Command="tsc -p jsconfig.json" />
</Target>
```

### Benefits

* You can use ES6/ES7 features and have then down compile to ES5
 * This gives us the ability to leverage newer JS features and not worry if they are widely supported

## Why Migrate to TypeScript?

* Things seem to be working pretty well... why would we migrate to TS???
* Well, we can still make mistakes
* Leaving our code in JS files doesn't allow the compiler to report those errors

## Introducing TypeScript

_Demo: Open language overview demo in VS Code_

* Superset of JavaScript
* Static typing
* Type inference
 * Inferred vs explicit return type
 * Inferrence via variable assignment
* Interfaces
* Classes
 * Private members
 * Readonly members
* Namespaces
* Modules

## Migrating to TS

* Change our `jsconfig.json` file to a `tsconfig.json` file
 * Set `allowJs` compiler option to `true`
* Update the `tasks.json` file

```
{
  // See https://go.microsoft.com/fwlink/?LinkId=733558
  // for the documentation about the tasks.json format
  "version": "0.1.0",
  "command": "tsc",
  "isShellCommand": true,
  "args": ["-p", "."],
  "showOutput": "silent",
  "problemMatcher": "$tsc"
}
```

### Now What Can We Do?

* Selectively convert JS files to TS
* Ability to add optional types
* Ability to define interfaces

### What to Convert First?

* Short
* Simple
* Referenced
* Has Tests
* Self-Contained
* "Owned"

### Convert a Class to Use TS

* Convert the Version class
* Show some of the gotchas
* Converting a file to use TS will likely introduce errors
* TS wants you to be more explicit
* Explain that TS will emit JS even when there's a compilation error
 * Show how to configure the compiler to not emit JS
* Convert the `Framework` constructor function to be a class
 * Update the Version class `supportedFrameworks` property
* Remove the JSDoc comment on the `addSupportedFramework` function
 * Now we can use explicit typing
* JS files can see TS files and vice versa

### Catching Hard to Find Bugs

* Run the app and show that we're getting two errors in the console
* Convert the last two files to TypeScript
* And... we get compilation errors!
* Fix the errors in the data and remove the hack

### What Else?

Update `tsconfig.json` to now allow any implicit `any` data types

```
{
  "compilerOptions": {
    "target": "es5",
    "allowJs": true,
    "outDir": "wwwroot/scripts",
    "noImplicitAny": true
  },
  "include": [
    "Client"
  ],
  "typeAcquisition": {
    "include": [
      "jquery"
    ]
  }
}
```

* Improved find all references
 * Show what happens if we try to use a string-based search to find all references to one of the name properties
 * Symbol-based
* Improved renaming support

### Adding Namespaces

* We're currently polluting the global context
* Wrap our code into namespaces
* Need to export any item that needs to be callable outside of the current file

## Debugging

### Source Maps

* Configure the TS compiler to emit source maps
* Use inline sources so that our source maps will get served to the client

```
{
  "compilerOptions": {
    "target": "es5",
    "allowJs": true,
    "outDir": "wwwroot/scripts",
    "noImplicitAny": true,
    "inlineSourceMap": true,
    "inlineSources": true
  },
  "include": [
    "Client"
  ],
  "typeAcquisition": {
    "include": [
      "jquery"
    ]
  }
}
```

## Drawbacks of Using Bower Instead of NPM

Now that we have a tsconfig.json file as part of our project, we need to manually download type definition files for any external JS libraries that we're using.

* Previously, this was being done for us automatically using a feature called "Automatic Type Aquisition"
* Now we have to use the Node package manager npm to acquire our type definition files
* First we need to initialize our project to use the npm package manager
* Then we need to install the type definition file for "jquery"
 * We do that by installing the "jquery" package in the "@types" scoped package
 * A scoped npm package is a collection or group of packages that is created from the DefinitelyTyped GitHub repo (https://github.com/DefinitelyTyped/DefinitelyTyped)
* DefinitelyTyped is a community maintained repo of TypeScript type definition files

```
npm init -y
npm install @types/jquery --save-dev
```

_Demo: Show the contents of the jquery type definition file_
