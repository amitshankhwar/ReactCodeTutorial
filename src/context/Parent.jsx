import React, { createContext, useContext, useState } from "react";
import Child1 from "./Child1";
// import { Button } from "bootstrap";

export const themeContext = createContext();
export const authContext = createContext();

const Parent = () => {
  const [theme, setTheme] = useState("light");
  const [isLogin, setIsLogin] = useState(false);

  function handleClick() {
    setTheme(`${theme === "light" ? "dark" : "light"}`);
  }

  return (
    <authContext.Provider value={isLogin}>
      <themeContext.Provider value={theme}>
        <div>
          <button
            style={{
              backgroundColor: `${theme === "light" ? "white" : "black"}`,
            }}
          >
            Parent
          </button>
          <Child1 />

          <button onClick={handleClick}>
            {theme === "light" ? "light" : "dark"}
          </button>
        </div>
      </themeContext.Provider>
    </authContext.Provider>
  );
};

export default Parent;
