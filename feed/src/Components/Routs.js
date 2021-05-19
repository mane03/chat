import React from "react";
import { Route, Switch } from "react-router-dom";
import BigFeed from "../Pages/BigFeed";
import Chat from "../Pages/Chat";
import Profile from "./Profile/Profile";

function Routs() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={BigFeed} />
        <Route path="/homeworks" component={BigFeed} />
        <Route path="/chat" component={Chat} />
        <Route path="/username" component={Profile}/>
        <Route path="/user" component={Profile} />
      </Switch>
    </div>
  );
}

export default Routs;
