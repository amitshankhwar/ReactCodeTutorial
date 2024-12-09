import React from "react";
import { useLocation } from "react-router-dom";
import About from "./About";

const Contact = () => {
  const location = useLocation();
  console.log(location);

  return <About />;
};

export default Contact;
