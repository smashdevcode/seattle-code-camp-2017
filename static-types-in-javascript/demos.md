
# Demos

1) Create an `add` function

2) Call the function multiple times passing in different sets of parameters

3) Export the function and call it from another file

4) Show the editing experience in Atom and in VS Code
 * VS Code leverages TS even for vanilla JS files so we get a great editing experience even if we don't directly use TS
  * Navigate to definition
  * Show references
  * Renaming
 * Atom doesn't offer any improvements... even with Flow enabled

5) Update the project to use Flow (`flow init` and add `// @flow` to files)
 * Implicit typing
 * Type refinements
 * Explicit typing
  * Type annotations need to be removed from the JS using Babel
 * Maybe types and optional parameters

6) Create a copy of the project and convert to TS
 * Run `tsc -init` and change file extensions to `.ts`
 * Implicit typing
 * Type refinements
 * Explicit typing
  * Type annotations evaporate in the compiled JS
 * Strict types and optional parameters
