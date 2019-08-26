import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Home from './components/Home.js'

function App() {
  return (
    <div>
      <p>
        Hello World!
        </p>
      <Button type="button" class="btn btn-danger">Danger</Button>
      <Home></Home>
    </div>

  );
}

export default App;
