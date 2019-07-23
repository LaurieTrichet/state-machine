/// <reference path="./image.d.ts" />
import Greetings from "./greets";
import panda from './assets/images/panda.jpg';
console.log(new Greetings().sayHello("TypeScript"));
const home = document.getElementById("home") as HTMLImageElement;
home.src = panda;