import axios from "axios";
import { useEffect, useState } from "react";
export const useFetchGit = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(False);

  useEffect(() => {
    const user = "ivanmacedonio";
    const repo = "apiBlog2";

    async function fetchData() {
      try {
        const res = await axios.get(
          `https://api.github.com/repos/${user}/${repo}/commits`
        );
        setData(res.data);
        console.log("pass");
      } catch {
        setError(True);
      }
    }
  });

  return data, error;
};
