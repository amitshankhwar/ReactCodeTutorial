import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  let [val, setValue] = useState();

  function ParentKaFunction(val) {
    console.log(val);
    setValue(val);
  }

  return (
    <div>
      <h1>Parent {val}</h1>
      <Child ParentKaFunction={ParentKaFunction} />
    </div>
  );
};

export default Parent;
