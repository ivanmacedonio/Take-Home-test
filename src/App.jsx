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
          <Card author={commit.author.login}
          message={commit.commit.message}
          title= {commit.sha}
          img={commit.committer.avatar_url}></Card>
        </div>
      ))}
    </div>
  );
}

export default App;
