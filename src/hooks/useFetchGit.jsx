import axios from "axios";
import { useEffect, useState } from "react";
export const useFetchGit = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          `https://api.github.com/repos/ivanmacedonio/Take-Home-test/commits`
        );
        setData(res.data);
      } catch {
        setError(True);
      }
    }
    fetchData();
  }, []);

  return { data, error };
};
