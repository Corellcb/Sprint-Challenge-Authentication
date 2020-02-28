// Libraries
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// CSS
import './App.css';

// Components
import SignupForm from "./components/SignupForm";
import SigninForm from './components/SigninForm';
import Jokes from './components/Jokes';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Router>
        <Switch>
          <Route exact path='/' component={SignupForm} />
          <Route path='/signin' component={SigninForm} />
          <Route path='/jokes' component={Jokes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
