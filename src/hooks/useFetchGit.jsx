import axios from "axios";
import { useEffect, useState } from "react";
export const useFetchGit = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/apiV1/getCommit/`
        );
        setData(res.data);
        setIsLoading(false)
      } catch {
        setError(true);
      }
    }
    fetchData();
  }, []);

  return { data, error, loading };
};
