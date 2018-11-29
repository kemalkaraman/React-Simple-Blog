import React, { Component } from "react";
import { BrowserRouter, Route,Switch } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetails from "./pages/Articles/components/ArticleDetails";
import Article from "./pages/Articles";
import NotFound from "./layouts/notFound";

class App extends Component {
  render() {

    return (
      <BrowserRouter>
          <Switch>
            <Route  exact path="/" component={Home} />
            <Route path="/Article" component={Article} />
            <Route path="*" component={NotFound} />
            </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
