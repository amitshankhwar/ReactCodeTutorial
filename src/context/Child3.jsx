import React, { useContext } from "react";
import { authContext, themeContext } from "./Parent";

const Child3 = () => {
  const theme = useContext(themeContext);
  const isLogin = useContext(authContext);
  console.log(isLogin);

  return (
    <div>
      <button
        style={{
          backgroundColor: `${theme === "light" ? "white" : "black"}`,
        }}
      >
        Child3
      </button>
    </div>
  );
};

export default Child3;
