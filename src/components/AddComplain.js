import React from 'react';
import { Button } from 'react-bootstrap';


class AddComplain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {name: ''};

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChangeName} />
        </label><br></br>
        <Button type="submit" value="Submit" >Submit</Button>
      </form>

      </div>

    );
  }
}

export default AddComplain;