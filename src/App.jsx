import "./App.css";
import { useFetchGit } from "./hooks/useFetchGit";
function App() {
  const {data, error} = useFetchGit()

  return <></>;
}

export default App;
