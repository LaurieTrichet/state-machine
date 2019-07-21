/// <reference path="../node_modules/@types/chai/index.d.ts" />
/// <reference path="../src/greets.ts" />

import * as chai from 'chai';
import Greetings from '../src/greets';
describe("greetings", () =>{
    describe("sayHello", () => {
        it("should display a string", () => {
            const greetings = new Greetings().sayHello("Laurie");
            chai.assert.equal(greetings, "Hello from Laurie");
        });
    });
});