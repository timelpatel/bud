import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else setError(true);
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  } ,[url]);

  return { data, error, loading };
};

export default useFetch;
