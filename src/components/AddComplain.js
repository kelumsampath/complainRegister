import React from 'react';
import { Button } from 'react-bootstrap';


class AddComplain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      houseNo: '',
      complain: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeHouseNo = this.handleChangeHouseNo.bind(this);
    this.handleChangeComplain = this.handleChangeComplain.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeHouseNo(event) {
    this.setState({ houseNo: event.target.value });
  }
  handleChangeComplain(event) {
    this.setState({ complain: event.target.value });
  }
  handleSubmit(event) {
    var complainData = {
      name: this.state.name,
      house: this.state.houseNo,
      complain: this.state.complain
    }
    //alert('A name was submitted: ' + this.complainData.name);
    event.preventDefault();
    console.log(complainData);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name of complainer:
          <input type="text" value={this.state.name} onChange={this.handleChangeName} />
          </label><br></br>
          <label>
            Residencial Number:
          <input type="Number" value={this.state.houseNo} onChange={this.handleChangeHouseNo} />
          </label><br></br>
          <label>
            Complain:
          <input type="text" value={this.state.complain} onChange={this.handleChangeComplain} />
          </label><br></br>
          <Button type="submit" value="Submit" >Submit</Button>
        </form>

      </div>

    );
  }
}

export default AddComplain;