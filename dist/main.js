var greets;
(function (greets) {
    function sayHello(name) {
        return "Hello from " + name;
    }
    greets.sayHello = sayHello;
})(greets || (greets = {}));
var sayHello = greets.sayHello;
var greets;
(function (greets) {
    console.log(greets.sayHello("TypeScript"));
})(greets || (greets = {}));
//# sourceMappingURL=main.js.map