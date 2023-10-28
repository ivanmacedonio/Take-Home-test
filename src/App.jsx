import "./App.css";
import { Card } from "./components/Card";
import { Loading } from "./components/Loading";
import { useFetchGit } from "./hooks/useFetchGit";
function App() {
  const { data, error, loading } = useFetchGit();
  console.log(loading);
  return (
    <>
      <h1 id="titleApp">Commits History by Ivandev.</h1>
      <div className="app">
        {loading ? (
          <Loading />
        ) : (
          <div>
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
        )}
        <div className="error">{error ? <Error></Error> : ""}</div>
      </div>
    </>
  );
}

export default App;
