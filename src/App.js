import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/style/index.scss";

import { Provider } from "react-redux";
import appStore from "./store/store";

import Layout from "./Components/Layout";
import About from "./Pages/About";
import Home from "./Pages/Home";

function App() {
  return (
    <Provider store={appStore}>
      <Router>
        <div className="App">
          <Layout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </Layout>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
