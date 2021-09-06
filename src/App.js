import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import AddProduct from './Components/AddProduct/AddProduct';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Home />
        </Route>
        <Route path="/addProduct">
          <AddProduct />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
