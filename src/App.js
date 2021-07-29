import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
        </Layout>
        <Route component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
