import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import More from "./Info";
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Main} />
      <Route path="/info" component={More} />
    </BrowserRouter>
  );
}

export default App;
