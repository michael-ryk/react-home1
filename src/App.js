import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const SignsPage = (props) => (
  <div>
    <Link to='/'>Home Page</Link>
    <button onClick={() => props.history.push('/')}>Home Page</button>
    <h1>Signs Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/SignsPage' component={SignsPage} />
      </Switch>
    </div>
  );
}

export default App;
