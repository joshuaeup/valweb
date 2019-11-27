import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Calculator from "./pages/calculator";
import './App.css';

function App() {
  return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/calulator" component={Calculator} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
