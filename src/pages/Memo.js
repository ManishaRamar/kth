import React from 'react'
import { useMemo, useState } from 'react'
export default function Memo({ data }) {
    const [inputValue, setInputValue] = useState("");

    const  expansiveCalculation = (data) => {
        console.log("Performing Calculation");
        return data.toUpperCase();
    };

  const memoizedResult = useMemo(() => expansiveCalculation(inputValue), [inputValue]);  
  return (
    <div>
        <lable>Data
        <input type="text" value={inputValue} onChange={(e) =>setInputValue(e.target.value)}/>
        </lable>
        <p>Original data: {inputValue}</p>
        <p>Memoized result: {memoizedResult}</p>
    </div>
  );
}
