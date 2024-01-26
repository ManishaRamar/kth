import React from 'react'
import { useReducer } from 'react';

const counterReducer =(state, action) =>{
    switch(action.type){
        case 'INCREMENT':
            return{count: state.count + 1};
        case 'DECREMENT':
            return{count: state.count - 1};
        default:
            return state;    
    }
};
export default function Reducer() {
    const[state, dispach]= useReducer(counterReducer, { count: 0});
  return (
    <div>
        <p>Count: {state.count}</p>

        <button onClick={() => dispach({type: "INCREMENT"})}>Add</button>
        <button onClick={() => dispach({type: "DECREMENT"})}>Sub</button>
        <button></button>
    </div>
  );
}