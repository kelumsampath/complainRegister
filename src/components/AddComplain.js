import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios'
import './styles/Form.css'
import { Route, Redirect } from 'react-router-dom';

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
    var complain = {
      ComplainerName: this.state.name,
      houseNO: this.state.houseNo,
      complain: this.state.complain
    }
    //alert('A name was submitted: ' + this.complainData.name);
    event.preventDefault();
    console.log(complain);
    axios.post('http://localhost:57987/api/addcomplain', 
        complain
       )
       .then(function (response) {
         console.log(response)
         window.alert(response.data.msg)
         if(response.data.state){
          window.location.href = "/";
         }
       })
       .catch(function (error) {
         console.log(error);
       });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}  className='form'>
        <h1>Add Complain</h1>
          <label className='lable'>
            Name of complainer:<br/>
          <input  class="form-control" type="text" value={this.state.name} onChange={this.handleChangeName} required/>
          </label><br></br>
          <label className='lable'>
            Residencial Number:<br/>
          <input  class="form-control" type="Number" value={this.state.houseNo} onChange={this.handleChangeHouseNo} required/>
          </label><br></br>
          <label className='lable'>
            Complain:<br/>
          <input  class="form-control" type="text" value={this.state.complain} onChange={this.handleChangeComplain} required/>
          </label><br></br>
          <Button type="submit" value="Submit" >Submit</Button>
        </form>

      </div>

    );
  }
}

export default AddComplain;