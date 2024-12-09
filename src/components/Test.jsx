import React, { useEffect, useState } from "react";

function Sccanner() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const url =
    "https://linkedin-data-api.p.rapidapi.com/get-article-comments?url=https%3A%2F%2Fwww.linkedin.com%2Fpulse%2F2024-corporate-climate-pivot-bill-gates-u89mc%2F%3FtrackingId%3DV85mkekwT9KruOXln2gzIg%253D%253D&page=1&sort=REVERSE_CHRONOLOGICAL";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "8268e3dff7msh8ad832d379e477ep14d8f5jsne9a00e7704c6",
      "x-rapidapi-host": "linkedin-data-api.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const res = await response.json();
        // console.log("the testing apis is ", res);

        setData(res);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <h1>HELLO MASTER {data.message}</h1>
    </>
  );
}

export default Sccanner;
