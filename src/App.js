import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          {routes.map(({ path, element }, key) => (
            <Route {...{ path, element, key }} />
          ))}
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
