# state-machine

## Notes on npm and typescript

### updating npm

```bash
npm i -g npm@latest
```

### installing typescript
```bash
npm install -g typescript
```

### launching a python server 
```bash
python -m http.server
```

### To debug with vs code
map are needed


## mocha

install mocha globally so it is not a pain to add to vscode tasks 

## Typescript compilation
[source](https://stackoverflow.com/questions/14287954/compiling-multiple-typescript-files)

### program compilation

- probably have to do depency ordering manually
- will have to inter each reference to a file using `<script>` tags in the index.html for instance.

refer to your references using `///<reference>` tags.
If the files being referenced are `.ts` then the files will be concatenated in one file specified by the `--out` compiler option. If no `--out` parameter is specified the compilation will be side by side.


### module compilation

- used by node.js
- only side by side compilation
- `/// <reference>` is used only for reference to `.d.ts` files.


### using commonjs
seems like we can't use namespace


## modules

There are module loader used in a node environment, server side. Those are commonjs modules.

There are module used in the browser, AMD, es6?.

There are modules you can use in both browser and node, systemJS.

Then if you want to use modules in the browser you'll need webpack or browserify that will package your modules so they load in the browser.

## Create a single file using modules

- use webpack

using webpack bundle the modules and optimise the number of round trips necessary to download to code to execute.

- install babel-loader

babel transform the ts code into js code that most of the browser will support.

https://devblogs.microsoft.com/typescript/typescript-and-babel-7/
https://iamturns.com/typescript-babel/
https://github.com/Microsoft/TypeScript-Babel-Starter

- copy image over

https://medium.com/a-beginners-guide-for-webpack-2/handling-images-e1a2a2c28f8d

- copy html file over
https://www.npmjs.com/package/copy-webpack-plugin

### using gulp


## test frameworks

### mocha
mocha is a testing library using node.js. ( common js module)

### mocha and webpack

//TODO seems like we'll have to use gulp

### test reports

https://tomasalabes.me/blog/typescript/tests/code-coverage/webpack/2018/09/24/ts-code-coverage.html
https://stackoverflow.com/questions/16633246/code-coverage-with-mocha