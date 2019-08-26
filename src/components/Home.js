import React from 'react';
import NavBar from './NavBar.js'
import { Button } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <h1>Hello, </h1>
        <p>
          Hello World!
        </p>
        <Button type="button" class="btn btn-danger">Danger</Button>

      </div>

    );
  }
}

export default Home;