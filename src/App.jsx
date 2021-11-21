import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';
import { Suspense } from "react";
import routes from "./helper/constants/routes";

const App = () =>
(
  <Suspense fallback={<>loading</>}>
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          {routes.map(r => (<Route exact key={r.id} path={r.path} component={r.page} />))}
        </Switch>
      </div>
    </Router>
  </Suspense>
);

export default App
