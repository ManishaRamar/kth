import React from 'react'
import { useState }  from 'react'
import "../pages/Counter.css";


    const Counter = () => {
        const  [count,Setcount]=useState(0);

       const incrementCount = () => {
            Setcount(count+1);
        }; 

        const decrementCount = () => {
            Setcount(count-1);
        }; 

        const resetCount= () => {
            Setcount(0);
        }; 
  return (
    <div>
    <div class ="container">
         <h1>Counter : {count}</h1>
         <div className="button-container">
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
         </div>
    </div>
    </div>
  );
};
export default Counter

