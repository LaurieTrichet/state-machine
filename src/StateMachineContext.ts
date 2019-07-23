import IState from "./IState";
import IdleState from "./IdleState";

export default class StateMachineContext{
    private _state: IState;
    public get state (): IState{
        return this._state;
    }

    public init(){
        this._state = new IdleState();
    }

}