import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "./MainPage";
import NotFound from "./NotFound";
// import Expenses from "./Expenses";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        {/* <Route path="/expenses" component={Expenses}/> */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}
