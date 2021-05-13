import './App.scss';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Chat from "./Chat";
import BigFeed from "./Components/BigFeed";


function App (){


    return (
        <Router>
            <Switch>
            <Route path={'/'} exact>
                <BigFeed/>
            </Route>
            <Route path={'/chat'} exact>
                <Chat />
            </Route>
            </Switch>
        </Router>
    )
}

export default App;
