import React from 'react';
import './App.css';
import {BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';
import Form from './components/Form';
import dashboard from './components/Dashboard';


export default class App extends React.Component{
  render()
{
  return (
    <Router>
     <Link to="/login">Login</Link>
      <Switch>
        <Route exact path="/login" component={Form}/> 
       <Route exact path="/dashboard" component={dashboard}/>
      </Switch>
    </Router>
  )
}
};

