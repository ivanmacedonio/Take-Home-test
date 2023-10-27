import "./App.css";
import { Card } from "./components/Card";
import { useFetchGit } from "./hooks/useFetchGit";
function App() {
  const { data, error } = useFetchGit();
  console.log(data);
  return (
    <>
      <h1 id="titleApp">Commits History by Ivandev.</h1>
      <div className="app">
        {data
          .slice()
          .reverse()
          .map((commit) => (
            <div className="cardContainer" key={commit.sha}>
              <Card
                author={commit.author.login}
                message={commit.commit.message}
                title={commit.sha}
                img={commit.committer.avatar_url}
              ></Card>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
