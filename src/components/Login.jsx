import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  function handleClick() {
    alert("form submit");

    navigate("/");
  }

  return (
    <div>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default Login;
