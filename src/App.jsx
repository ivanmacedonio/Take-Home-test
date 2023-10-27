import "./App.css";
import { Card } from "./components/Card";
import { useFetchGit } from "./hooks/useFetchGit";
function App() {
  const { data, error } = useFetchGit();
  console.log(data);
  return (
    <div className="app">
      {data.map((commit) => (
        <div className="cardContainer">
          <Card></Card>
        </div>
      ))}
    </div>
  );
}

export default App;
