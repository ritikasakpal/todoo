import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import All from "./components/All";
import { Root } from "./components/Root";
import Active from "./components/active";
import { Provider } from "react-redux";
import store from "./js/store/index";

import Done from "./components/done";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Root} />
            <Route path="/all" component={All} />
            <Route path="/done" component={Done} />
            <Route path="/active" component={Active} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
