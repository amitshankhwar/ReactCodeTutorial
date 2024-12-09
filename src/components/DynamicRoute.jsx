import React from "react";
import { useParams } from "react-router-dom";

const DynamicRoute = () => {
  const { id } = useParams();

  return <div>DynamicRoute {id}</div>;
};

export default DynamicRoute;
