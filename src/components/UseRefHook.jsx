import React, { useRef, useState } from "react";

const UseRefHook = () => {
  let [count, setCount] = useState(0);
  let inputRef = useRef(null);
  console.log(inputRef.current.value);

  return (
    <div>
      <h1>UseRef Hook</h1>
      <input ref={inputRef} type="text" placeholder="enter name" />
      <p>{count}</p>
      <button onClick={setCount}>click</button>
    </div>
  );
};

export default UseRefHook;
