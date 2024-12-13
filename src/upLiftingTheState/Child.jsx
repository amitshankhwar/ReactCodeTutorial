import React, { useState } from "react";

const Child = ({ ParentKaFunction }) => {
  const [data, setData] = useState("hello");

  ParentKaFunction(data);

  return (
    <div>
      <h1>Child</h1>
    </div>
  );
};

export default Child;
