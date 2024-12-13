import React, { useContext } from "react";
import Child2 from "./Child2";
import { themeContext } from "./Parent";

const Child1 = () => {
  const theme = useContext(themeContext);

  return (
    <div>
      <button
        style={{
          backgroundColor: `${theme === "light" ? "white" : "black"}`,
        }}
      >
        Child1
      </button>
      <Child2 />
    </div>
  );
};

export default Child1;
