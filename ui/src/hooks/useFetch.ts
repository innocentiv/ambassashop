import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let requestStale = false;
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        if (requestStale) return;
        if (response.ok) {
          setData(result);
        } else {
          throw new Error(result);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      requestStale = true;
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
