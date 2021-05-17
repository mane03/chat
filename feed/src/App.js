import "./App.scss";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Components/Header";
import Routs from "./Components/Routs";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routs />
      </Router>
    </>
  );
}

export default App;
