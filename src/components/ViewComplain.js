import React from 'react';
import './styles/card.css';
import axios from 'axios'

class ViewComplain extends React.Component {
 
  // {name: "A", houseNO: "55", complain: "cdcd"},
  //   {name: "B", houseNO: "55", complain: "cdcd"},
  //   {name: "C", houseNO: "55", complain: "cdcd"},
  //   {name: "D", houseNO: "55", complain: "cdcd"},
  //   {name: "E", houseNO: "55", complain: "cdcd"},
  //   {name: "F", houseNO: "55", complain: "cdcd"}

 constructor(props){
    super(props);
    this.state = { listitems: []};
    this.getcomplains(this.updatestate);
 }

 updatestate = (list) => {
  this.setState({ listitems: list });
  // console.log(this.state.listitems);
  // this.state.listitems.forEach(function(element) {
  //   console.log(element);
  //});
 }

getcomplains(updatestate) {
  axios.get('http://localhost:57987/api/ViewComplain', 
        
       )
       .then(function (response) {
       console.log(response.data)
        updatestate(response.data)
       })
       .catch(function (error) {
         console.log(error);
       });
}

 
  render() {
    return (
      <div>
        
      <React.Fragment>
        
        <ul className="list-group">
          {this.state.listitems.map(listitem => (
            <li
              key={listitem}
              className="list-group-item list-group-item-primary"
            >
            <div className='card'>
            <div className='text'>
              <h3>Complainer's Name: {listitem.complainerName}</h3>
              <h4>House Number: {listitem.houseNO}</h4>
              <h5>Complain: {listitem.complain}</h5><br/>
              </div>
              </div>

            </li>
          ))}
        </ul>
      </React.Fragment>
      </div>
    );
  }
 
}

export default ViewComplain;