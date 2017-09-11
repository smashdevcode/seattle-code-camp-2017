
# Flow Setup

## Setup Compiler

* You need to setup a compiler to strip away Flow types
* Two common options are Babel and flow-remove-types

```
npm install --save-dev babel-cli babel-preset-flow
```

Add a `.babelrc` file in the root of your project.

```
{
  "presets": ["flow"]
}
```

Then add a script to build your project...

```
{
  "name": "my-project",
  "main": "dist/index.js",
  "scripts": {
    "build": "babel src/ -d dist/",
    "prepublish": "npm run build"
  }
}
```

## Setup Flow

Install Flow...

```
npm install --save-dev flow-bin
```

Add Flow script...

```
{
  "name": "my-project",
  "main": "dist/index.js",
  "scripts": {
    "build": "babel src/ -d dist/",
    "flow": "flow",
    "prepublish": "npm run build"
  }
}
```

To run Flow... initialize your project using...

```
npm run flow init
```

Then run flow...

```
npm run flow
```

## Configuring VS Code

* This is totally optional!
 * Though having tooling support is a major motivation for using Flow
* Install the Flow Language Support extension
* Install Flow globally (to ensure that it's in your path)

```
npm install flow-bin -g
```

Set workspace preference to disable default syntax validation from Visual Studio Code by adding the following to the `.vscode/settings.json` file...

```
{
  "javascript.validate.enable": false
}
```
