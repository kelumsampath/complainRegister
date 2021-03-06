import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js'
import AddComplain from './components/AddComplain.js'
import ViewComplain from './components/ViewComplain.js'
import NavBar from './components/NavBar.js'
import { BrowserRouter as Router, Route, Switch} from'react-router-dom'

function App() {
  return (
   <div>
     <NavBar></NavBar>
   <Router>
     <Switch>
       <Route exact path='/' component={Home}/>
       <Route exact path='/addcomplain' component={AddComplain}/>
       <Route exact path='/viewcomplain' component={ViewComplain}/>
     </Switch>
   </Router>
   </div>

  );
}

export default App;
