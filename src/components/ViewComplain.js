import React from 'react';
import './styles/card.css'

class ViewComplain extends React.Component {
  state = {
    listitems: [{name: "A", houseNO: "55", complain: "cdcd"},
    {name: "B", houseNO: "55", complain: "cdcd"},
    {name: "C", houseNO: "55", complain: "cdcd"},
    {name: "D", houseNO: "55", complain: "cdcd"},
    {name: "E", houseNO: "55", complain: "cdcd"},
    {name: "F", houseNO: "55", complain: "cdcd"}
   ]
  };

 
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
              <h3>Complainer's Name: {listitem.name}</h3>
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