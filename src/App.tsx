import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import HomePage from "./components/Home/HomePage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
