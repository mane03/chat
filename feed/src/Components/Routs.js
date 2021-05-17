import React from "react";
import { Route, Switch } from "react-router-dom";
import BigFeed from "../Pages/BigFeed";
import Chat from "../Pages/Chat";

function Routs() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={BigFeed} />
        <Route path="/homeworks" component={BigFeed} />
        <Route path="/chat" component={Chat} />
        <Route path="/username" />
        <Route path="/user" />
      </Switch>
    </div>
  );
}

export default Routs;
