import React from 'react';

import { Button } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <div>
        
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