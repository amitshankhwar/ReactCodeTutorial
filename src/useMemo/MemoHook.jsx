import React, { useState, useMemo } from "react";

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  // Expensive computation
  const computeFactorial = (n) => {
    console.log("Calculating factorial...");
    if (n <= 0) return 1;
    return n * computeFactorial(n - 1);
  };

  // const factorial = useMemo(() => computeFactorial(count), [count]);
  // const factorial = computeFactorial(count);
  const factorial = useMemo(() => {
    return computeFactorial(count);
  }, [count]);

  return (
    <div>
      <h2>
        Factorial of {count}: {factorial}
      </h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <input
        type="text"
        placeholder="Type here..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </div>
  );
}

export default UseMemoExample;
