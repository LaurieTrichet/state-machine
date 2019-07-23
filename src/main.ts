/// <reference path="./image.d.ts" />
import Greetings from "./greets";
import panda from './assets/images/panda.jpg';
console.log(new Greetings().sayHello("TypeScript"));
if (typeof document !== 'undefined'){
    const home = document.getElementById("home") as HTMLImageElement;
    home.src = panda;
}