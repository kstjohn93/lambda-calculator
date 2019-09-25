import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data";

//Import your array data to from the provided data file

const [opt] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div className="operators">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
        {opt.map((data, idx) => (
        <OperatorButton key={idx} operatorData={data.char} />
      ))}
    </div>
  );
  
  export default Operators;
