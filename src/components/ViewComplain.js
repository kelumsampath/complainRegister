import React from 'react';
import { Button } from 'react-bootstrap';

class ViewComplain extends React.Component {
   data=[{name: "A", houseNO: "55", complain: "cdcd"},
   {name: "B", houseNO: "55", complain: "cdcd"},
   {name: "C", houseNO: "55", complain: "cdcd"},
   {name: "D", houseNO: "55", complain: "cdcd"}
  ]
  render() {
    return (
      <div>
        
        <h1> view Hellopoooo, </h1>
        <p>
          Add complain
        </p>
        <Button type="button" class="btn btn-danger">Danger</Button>

      </div>

    );
  }
}

export default ViewComplain;