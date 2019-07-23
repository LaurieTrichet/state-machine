/// <reference path="../node_modules/@types/chai/index.d.ts" />

import * as chai from 'chai';
import StateMachineContext from '../src/StateMachineContext'
import IdleState from '../src/IdleState';
describe("StateMachineContext", () =>{
    describe("init", () => {
        it("should set the first state to Idle", () => {
            const stateMachineContext = new StateMachineContext();
            stateMachineContext.init();
            stateMachineContext.state
            chai.assert.instanceOf(stateMachineContext.state, IdleState);
        });
    });
});