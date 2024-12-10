import React, { useEffect, useState } from "react";

function Sccanner() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const url =
    "https://linkedin-bulk-data-scraper.p.rapidapi.com/private_company_insights_2?link=http%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fgoogle";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "0b3fd7062amsh2a602357ddaa2b2p152c51jsn69a999950e6a",
      "x-rapidapi-host": "linkedin-bulk-data-scraper.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const res = await response.json();
        console.log("the testing apis is ", res);

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
