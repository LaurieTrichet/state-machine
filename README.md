# state-machine

This project is an exercise to setup a typescript project from scratch, to understand the different parts that are involved in the process. 


1. configure the typescrip compiler using es6 module settings.
2. add webpack to run the app on the browser a, using the babel-loader.
3. add test using mocha/chai
4. add coverage reports using nyc

The code used is a naive implementation of a state machine.

## Notes on npm and typescript

### Update npm

```bash
npm i -g npm@latest
```

## Install the project

```bash
npm install
```

## Run the project

### Build the project

```bash
npm run build
```

### Running the node app

```bash
node dist/main.js
```

### launching a python server 
```bash
python -m http.server 8080
```

http://localhost:8080/dist/